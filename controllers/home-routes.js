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
                attributes: [
                  'content',
                  'post_date',
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
    const newComment = await Comment.create({
      content: req.body.content,
      post_date: '2020-05-08 04:00:00',
      post_id: 1,
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
  
module.exports = router;
  