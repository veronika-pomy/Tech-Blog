const router = require('express').Router();
const { Post, Comment } = require('../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../utils/auth.js');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll();
  
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

// GET specific post by id
// Use middleware to check login status before allowing user to see post
router.get('/post/:id', withAuth, async (req, res) {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: Comment,
                attributes: [
                  'content',
                  'author',
                  'post_date',
                ],
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

// GET route to redirect if user not logged in
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});
  
module.exports = router;
  