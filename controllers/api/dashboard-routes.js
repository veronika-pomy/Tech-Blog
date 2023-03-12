const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../../utils/auth');

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

module.exports = router;
