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
  
      const posts = dbPostData.map((post) => post.get({ plain: true }));
  
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
router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: Comment,
                include: [User],
                attributes: [
                  'content',
                  'created_at',
                  'user_id',
                  'post_id',
                ],
              },
              {
                model: User,
                attributes: ['username'],
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
router.post('/post/:id', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
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
      attributes: {exclude: ['password', 'id', 'email']},
      include: 
        [{ model: Post}]
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

// POST route for creating a new post
// Use middleware to check login status before allowing user to create a new post
router.post('/dashboard', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id,
  });
  
  res.status(200).json(postData);

  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// PUT route for updating a post
// Use middleware to check login status before allowing user to update a post
router.put('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const updatePostData = await Post.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    if (!updatePostData) {
      res.status(404).json({ message: 'No post with this id.' });
      return;
    }

    res.status(200).json(updatePostData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE route for deleting a post
// Use middleware to check login status before allowing user to delete a post
router.delete('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post with this id.' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
  