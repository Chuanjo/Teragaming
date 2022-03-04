# Teragaming

## Description

.
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend
- **events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend 
- **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile:
- Have a notice section
- Upload my profile picture
- See other users profile
- Add others users as a friends to my profile

Search options:
- Add more sorts options
- Posibility to search another users

Homepage
- Add a top games section
- Add reviews from external links


## ROUTES:

- GET / 
  - renders the homepage

- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form

- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password

- GET /auth/login
  - redirects to /auth/profile if user logged in
  - renders the login form

- POST /auth/login
  - redirects to /auth/profile if user logged in
  - body:
    - username
    - password

- POST /auth/logout
  - body: (empty)

- GET /auth/profile
  - renders user's profile

- GET /auth/your-reviews
  - renders your opinions

- GET /game-list
  - renders the game list + search bar

- GET /game-list/:page
  - renders the next/previous buttons

- POST /game-search
  - renders the search result

- GET /game-details/:id
  - renders game details + add to favorite button

- GET /games/edit/:id/:name
  - renders the edit form

- POST /games/create/:id/:name
  - redirects to /profile
  - body: 
    - score
    - status
    - opinion

- GET /auth/opinios
  - renders all the user's opinions

- POST /auth/:id/delete
  - redirects to your reviews

## Models

User model
 
```
username: String, Unique
email: String, Unique
password: String
```

Game model

```
name: String
apiId: String
score: String
status: Date
comment: String
createBy: [ObjectId<User>]
``` 

## Links


### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Chuanjo/Teragaming)

[Deploy Link](https://teragaming.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1aRxQQcxaCmdHP_hxaynvMQ4kir2q8wL0t19Zth651p4/edit?usp=sharing)