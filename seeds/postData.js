const { Post } = require('../models');

const postdata = [
  {
    title: 'MVC',
    content: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.',
    post_date: 'May 8, 2020',
    user_id: 1,
  },
  {
    title: 'Authentication vs Authorization',
    content: 'Authentication verifies the identity of a user or service, and authorization determines their access rights.',
    post_date: 'May 8, 2020',
    user_id: 2,
  },
  {
    title: 'ORM',
    content: 'Object–relational mapping is a programming technique for converting data between a relational database and the heap of an object-oriented programming language.',
    post_date: 'May 8, 2020',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;