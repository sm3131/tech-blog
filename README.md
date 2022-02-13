# Coding Tech Blog

# Description

This coding tech blog is an application that was created for users to be able to share their thoughts, opinions, or interesting discoveries about the tech world. This blog allows users create an account to begin writing blog posts, commenting on other users' posts, or just reading other users' posts about the tech world. If you have been looking for an application that has interesting posts about all things tech, look no further the Coding Tech Blog is for you. 

# Table of Contents
- [Built With](#built-with)
- [Code Access](#code-access)
- [Preview](#preview)
- [Functionality](#functionality)
- [License](#license)
- [Tech Blog Link](#tech-blog-link)
- [Questions](#questions)
- [Credit / Contribution](#credit--contribution)

# Built With
- Handlebars
- Bootstrap
- CSS 
- Javascript
- Node.js
- Express.js
- Express-Session
- Bcrypt
- Connect-Session-Sequelize
- MySQL
- Sequelize

# Code Access

If you would like to access the code for this project, please visit this [GitHub](https://github.com/sm3131/tech-blog) repository. 

# Preview

Below are screenshots of the Coding Tech Blog application:
![Coding Tech Blog](assets/images/tech-blog.png)

# Functionality

Provided below is an overview of how the Coding Tech Blog application functions as well as some of the features it offers:
- Upon visiting the tech blog application using the link provided below, you will be directed to the home screen which will display all the posts from other users if there are any
- If you click on either the post title or the comments you will be directed to a page displaying the single post you clicked on, now showing its text content and the comments made on that post if there are any
- If this is your first time visiting the app, you will see directions on the home page guiding you to either login or sign up to create an account on the blog site.
- Clicking the login link in the navigation bar will take you to the login/sign-up page
- Here you will either enter an existing, or create a new username and password
- Once you have logged in or signed up you will be directed back to the homepage, where you will still see all users' posts, but now you will see the navigation bar has changed to display a dashboard link and logout link
- This time if you click on a user's post you will now have the ability to add a comment to the post since you are signed into the app
- You will also have a dashboard that will allow you to view all the posts you have created, add and delete your posts, update your posts, view all the comments you have made on other users' posts, or delete a comment you have made
- When you add a post it will show up on both your dashboard and on the main page either at or near the top as this will be one of the most recent posts created
- If you want to edit or delete one of your posts, click the 'Edit Post' button and you will have the option to either update your posts title, description, or delete it all together
- If you want to see all the comments you have made on other users' posts you can click the 'View Comments' button at the bottom of your dashboard page
- This will bring you to a new page with all of your comments and the option to delete any if you wish
- If you are idle on the site for about an hour you will be prompted to login again before being able to add/delete posts or comments, as well as view and edit your existing posts
- If you would like to logout of the app, just click the logout button in the navigation bar and you will be signed out from the site and directed back to the home page. 

# License

MIT License

Copyright (c) 2022 Sammi Moore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Tech Blog Link

The link to the deployed tech blog app is provided below:
https://tech-blog30.herokuapp.com/

# Questions

If you would like to access this project's repository as well as other projects in my GitHub, click this [GitHub](https://github.com/sm3131) link.

For all other questions or inquires please feel free to contact me via email at [sm2683@nau.edu](mailto:sm2683@nau.edu)

# Credit / Contribution

This tech blog application was created from scratch by myself, Sammi Moore. I wrote all of the front-end and back-end code as well as created the entire database set-up for the application.

The resources that I used for this project are as follows:
-  The Bcrypt package to hash and validate passwords (https://www.npmjs.com/package/bcrypt)
- The connect-session-sequelize package from npm to create a session in node.js (https://www.npmjs.com/package/connect-session-sequelize)
- The Express-session package from npm to create a session in node.js (https://www.npmjs.com/package/express-session)
- The sequelize package from npm in this node.js application in order more easily use mysql databases (https://www.npmjs.com/package/sequelize)
- The mysql2 package from npm to create and store the database and data (https://www.npmjs.com/package/mysql2)
- The express package from npm to create the server and routes (https://www.npmjs.com/package/express)
- The express-handlebars package from npm to create the front-end of the app (https://www.npmjs.com/package/express-handlebars)
- The dotenv package from npm to to hide mysql passwords and usernames when pushing code to GitHub (https://www.npmjs.com/package/dotenv)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)
- https://shields.io/ (To generate the link to create the license badge)
For the license badges and license section of the readme, I used the following resources:
- https://choosealicense.com/ (To help with picking which licenses to include)
- https://shields.io/ (To generate the link to create the license badge)
- https://wisehackermonkey.github.io/badge-demo/ (To help with coloring the license badges and grabbing the license links)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme)

- I also used some of the documentation and material from the lessons in modules 13 and 14 in order to remember how to properly set up servers, db connections, models, controllers, views, etc. 
