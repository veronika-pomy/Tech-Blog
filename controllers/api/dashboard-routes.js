const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../../utils/auth');

// GET all posts for a specific user
// router.get('/', withAuth, async (req, res) => {
//     try {
//       const dbUserData = await User.findByPk(req.session.user_id, {
//         attributes: {exclude: ['password']},
//         include: [{ model: Post }],
//       });
  
//       const user = dbUserData.get({ plain: true });

//       console.log(user);
  
//       res.render('dashboard', {
//         user,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// GET specific post by id and view comments for that post
// Use middleware to check login status before allowing user to see post

// POST route for creating a new post
// Use middleware to check login status before allowing user to create a new post

// PUT route for updating a post
// Use middleware to check login status before allowing user to update a post

// DELETE route for deleting a post
// Use middleware to check login status before allowing user to delete a post

module.exports = router;
