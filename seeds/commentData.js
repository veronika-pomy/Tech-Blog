const { CONNREFUSED } = require('dns');
const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Commnent on the MVC post.',
    author: 'Commenter 1',
    post_date: 'May 8, 2020',
    post_id: 1,
  },
  {
    content: 'Comment on the Authentication vs Authorization post.',
    author: 'Commenter 2',
    post_date: 'May 8, 2020',
    post_id: 2,
  },
  {
    content: 'Comment on the ORM post.',
    author: 'Commenter 3',
    post_date: 'May 8, 2020',
    post_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;