const { Post } = require('../models');

const postdata = [
  {
    title: 'MVC',
    content: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.',
    author: 'User 1',
    post_date: 'May 8, 2020',
  },
  {
    title: 'Authentication vs Authorization',
    content: 'Authentication verifies the identity of a user or service, and authorization determines their access rights.',
    author: 'User 2',
    post_date: 'May 8, 2020',
  },
  {
    title: 'ORM',
    content: 'Object–relational mapping is a programming technique for converting data between a relational database and the heap of an object-oriented programming language.',
    author: 'User 3',
    post_date: 'May 8, 2020',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
