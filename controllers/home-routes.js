const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../utils/auth.js');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
    });
  
      const posts = dbPostData.map((post) => post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// GET specific post by id with comments
// Use middleware to check login status before allowing user to see post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: Comment,
                include: [User],
                attributes: [
                  'content',
                  'post_date',
                  'user_id'
                ],
                // does not have the username for user who left comment 
                // (connect by user_id f key to User)
              },
              {
                model: User,
                attributes: ['username'], // only gets this attr? 
              },
            ],
        });

        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('post', { post, loggedIn: req.session.loggedIn });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST route for leaving a comment under a specific post 
// Use middleware to check login status before allowing user to leave comment
router.post('/post/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comment.create({
      content: req.body,
      post_date: '2020-05-08 04:00:00',
      post_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route to redirect if user not logged in
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

// GET all posts for a specific user
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{ model: Post }],
    });

    const user = dbUserData.get({ plain: true });

    console.log(user);

    res.render('dashboard', {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
  