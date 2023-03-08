const { User } = require('../models');

const userdata = [
  {
    "username": "Jane Smith",
    "email": "Jane@gmail.com",
    "password": "pass12345!"
  },
  {
    "username": "Dan Joe",
    "email": "danjo@gmail.com",
    "password": "12345password@#"
  },
  {
    "username": "Ted",
    "email": "Ted720@gmail.com",
    "password": "MyNeWPassWord54*"
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;