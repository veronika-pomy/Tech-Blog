const { CONNREFUSED } = require('dns');
const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Commnent on the MVC post.',
    post_date: 'May 8, 2020',
    post_id: 1,
    user_id: 2,
  },
  {
    content: 'Commnent on the MVC post 2.',
    post_date: 'May 8, 2020',
    post_id: 1,
    user_id: 3,
  },
  {
    content: 'Comment on the Authentication vs Authorization post.',
    post_date: 'May 8, 2020',
    post_id: 2,
    user_id: 3,
  },
  {
    content: 'Comment on the Authentication vs Authorization post 2.',
    post_date: 'May 8, 2020',
    post_id: 2,
    user_id: 1,
  },
  {
    content: 'Comment on the ORM post.',
    post_date: 'May 8, 2020',
    post_id: 3,
    user_id: 1,
  },
  {
    content: 'Comment on the ORM post 2.',
    post_date: 'May 8, 2020',
    post_id: 3,
    user_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;