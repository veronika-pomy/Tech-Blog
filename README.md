# Tech Blog

[![License][license-shield]][license-url]

## Description

This application is a CMS-style blog designed for developers and those interested in tech to share knowledge, publish thought pieces and opinions, and leave comments on other users' posts.

### App functionality

---

WHEN users visit the site

THEN they are presented with the homepage, which includes existing blog posts, if any, have been posted; the homepage and the dashboard navigation links; the log In option

WHEN they click on the homepage option

THEN they are taken to the homepage

WHEN they click on any other links in the navigation

THEN they are prompted to either sign up or sign in

WHEN they create a username, a password and click on the sign-up button

THEN their user credentials are saved, and they are logged into the site

WHEN they enter their email and password and click on the sign-in button

THEN they are signed in to the site

WHEN they click on the homepage option in the navigation

THEN they are taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN they click on an existing blog post

THEN they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN they enter a comment and click on the submit button while signed in

THEN the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN they click on the dashboard option in the navigation

THEN they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post

WHEN they enter the title and contents of the post and click on the button to add a new blog post

THEN the title and contents of my post are saved, and they are taken back to an updated dashboard with their new blog post

WHEN they click on the delete button on one of the existing posts in the dashboard

THEN that post is deleted

WHEN they enter the contents of the post to update and click the update button on one of the posts

THEN the content of the post gets updated

WHEN they click on the logout option in the navigation

THEN they are signed out of the site

WHEN they idle on the site for more than a set time

THEN they are able to view posts, but they are prompted to log in again before they can view comments, add and modify content

## Table of Contents

  <ul>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
    <li>
        <a href="#questions">Questions</a>
    </li>
    <li>
        <a href="#acknowledgments">Acknowledgements</a>
    </li>
  </ul>

---

## Demo

Insert screenshot

Insert link to the app

---

## License

Distributed under the MIT License. See "LICENSE.txt" for more information.

---

## Questions

If you have any questions regarding this project, please don't hesitate to contact me using my email address: pomyateevav@gmail.com. You can find my project repositories here: [veronika-pomy](https://github.com/veronika-pomy?tab=repositories).

---

## Acknowledgments

This list includes resources used for the project.

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Google Fonts API: M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c)
- [Express](https://expressjs.com/)
- [express-session](https://www.npmjs.com/package/express-session)
- [Handlebars](https://handlebarsjs.com/)
- [Heroku](https://devcenter.heroku.com/)
- [Lipsum generator](https://www.lipsum.com/)
- [Node.js](https://nodejs.org/en/)
- [normalize.css v8.0.1 | MIT License](https://github.com/necolas/normalize.css)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Shields.io - license badge](https://shields.io/)
- [Stack Overflow - Access an array index in handlebars](https://stackoverflow.com/questions/8044219/how-do-i-access-an-access-array-item-by-index-in-handlebars)
- [Stack Overflow - Access an array index in handlebars: How to change border color of textarea on :focus](https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus)

Custom code from the Northwestern Coding Boot Camp MVC Module 14

- helpers.js (format_date helper function)
- auth.js
- login.js and logout.js
- login.handlebars

<p align="right">(<a href="#tech-blog">back to top</a>)</p>

[license-shield]: https://img.shields.io/badge/license-MIT-blue?style=for-the-badge
[license-url]: https://github.com/veronika-pomy/Tech-Blog/blob/main/LICENSE
