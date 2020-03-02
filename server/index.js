require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { register, login, logout, getSession, editUser } = require('./controllers/usersController');
const checkUserSession = require('./middlewares/checkUserSessions')

massive(CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.error(err));

app
  .use(express.json())
  .use(
    session({
      secret: SESSION_SECRET,
      saveUninitialized: true,
      resave: false,
    })
  )
  .use(checkUserSession)
  .post('/auth/register', register)
  .post('/auth/login', login)
  .get('/auth/logout', logout)
  .get('/auth/session', getSession)
  .put('/auth/edit/user/:id', editUser)

app.listen(SERVER_PORT, () => console.log(`Roger Rodger on port ${SERVER_PORT}`));