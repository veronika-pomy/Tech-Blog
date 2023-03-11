const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// Import middleare for authenticating that user is logged in
const withAuth = require('../../utils/auth');



module.exports = router;
