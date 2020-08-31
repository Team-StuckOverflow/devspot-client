# DevSpot Client

DevSpot is built by a small team of four developers using React, React-Bootstrap, HTML, and CSS. There are two main resources in the backend that the client connects to: `Users` and `Posts`. Both of these resources are modelled using Mongoose and stored as collections of documents in a non-relational database (MongoDB). Supported user features include sign in, sign up, creating a post, seeing all posts, seeing all users, seeing other people's posts, sign out, change password and update profile (routes can be found in the API repo). Token authentication is incorporated into the app with the help of crypto (to generate the tokens) and Passport (authentication middleware used with Express). The team wrote routes for creating, reading, updating and deleting (CRUD) `Posts` with Express. Additionally, there were routes for creating, signing in to, and updating `User` profiles.

## Team StuckOverflow - Team Members

- [Azam Zariff](https://github.com/zar686)
- [Chris Heibel](https://github.com/lss555)
- [Perry Huang](https://github.com/perryfhuang)
- [Rain Robinson](https://github.com/rainswerld)

## Important Links

- [Deployed API](https://devspot-api.herokuapp.com/)
- [DevSpot API GitHub Repo](https://github.com/Team-StuckOverflow/devspot-api)
- [DevSpot App](https://team-stuckoverflow.github.io/devspot-client/)
- [DevSpot Client GitHub Repo](https://github.com/Team-StuckOverflow/project-3-client)

## Planning Story

The vision for DevSpot is to be the Twitter for software developers, where they can share their thoughts, journey, victories, struggles, things in tech that interest them, really anything related to software development.

We used Notion to be able to organize our sprint and delegate what features and bugs each team member was working on. You can see our [Kanban board here](https://www.notion.so/rainswerldbujo/StuckOverflow-Project-ddd424cd49e04171af84bebe2dcfc775) where we segmented our features and updates.

DevSpot allows users to also browse other user profiles and see their profile picture, where they are based out of, what languages they write in, how long they have been coding, links to their LinkedIn and Github profiles, all of their posts, etc. The `User` model includes the properties: email, username, (hashed)password, first name, last name, city, state, country, (coding)languages, years of experience, current role, GitHub profile link, LinkedIn profile link, and a profile picture. Initally, the team included an `active` property in the user model whose value is a boolean (default value is `true`) so that user accounts can be enabled and disabled. However, the current iteration of the app does not include deactivating user accounts. This is a feature that the team wishes to incorporate in the future. The `Post` model simply includes the body/content of the post and the owner of the post (in Mongoose, a reference to a specific user. Initally, a `Comment` subdocument was written into the `Post` model. Similar to the `active` property in the `User` model, the team did not get to incorporating comments into the app. Comments for each post will be supported in future iterations, as well as likes.

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to add a post to my wall.
- As a signed in user, I would like to update a post on my wall.
- As a signed in user, I would like to delete a post on my wall.
- As a signed in user, I would like to see all my posts.
- As a signed in user, I would like to view a list of other users and view their walls.

### Technologies Used

- React
- React-Bootstrap
- React-Router-Dom
- Babel
- HTML
- CSS
- JavaScript

### Future Iterations

Some of the features of future iterations have been mentioned already, including activation and deactivation of user accounts by toggling the `active` boolean property in the `User` model. Another one is allowing users to change their unique `username` (maybe limit this to once a week? once a month? or maybe unlimited?). For `posts`, the team wants to include `comments` as a subdocument as well a `likes` counter. In addition, profile pictures are simply stored as links in the database and rendered as img elements in the DOM. A future iteration of the app would support image upload of profile pictures as well picture uploads with posts using AWS.

### Wire Frame Planning
[Wire Frames](https://imgur.com/a/RZdx9Pw)
