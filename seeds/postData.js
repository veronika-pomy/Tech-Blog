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
    content: 'Object-relational mapping is a programming technique for converting data between a relational database and the heap of an object-oriented programming language.',
    post_date: 'May 8, 2020',
    user_id: 3,
  },
  {
    title: 'MVC Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu gravida libero. Nunc id nisl ligula.',
    post_date: 'Jan 1, 2023',
    user_id: 1,
  },
  {
    title: 'Authentication vs Authorization Post 2',
    content: 'Ut venenatis, erat non dignissim tincidunt, lectus tellus ullamcorper massa, quis tempor nulla odio at nisl.',
    post_date: 'Jan 1, 2023',
    user_id: 2,
  },
  {
    title: 'ORM Post 2',
    content: 'Donec euismod eget dolor ut scelerisque. Phasellus tempor, nibh at venenatis tempus, massa risus placerat sem, at porttitor nibh eros at metus.',
    post_date: 'Jan 1, 2023',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;