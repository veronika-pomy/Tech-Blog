const router = require('express').Router();
const { Post } = require('../../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../../utils/auth');

// GET all posts

// GET specific post by id and view comments for that post
// Use middleware to check login status before allowing user to see post

// POST route for creating a new post
// Use middleware to check login status before allowing user to create a new post

// PUT route for updating a post
// Use middleware to check login status before allowing user to update a post

// DELETE route for deleting a post
// Use middleware to check login status before allowing user to delete a post

module.exports = router;
