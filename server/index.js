require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const path = require('path');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const { register, login, logout, getSession } = require('./controllers/authController');
const { editUser, deleteUser } = require('./controllers/userController');
const { getEvents, createEvent, joinEvent } = require('./controllers/eventsController');

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
  .post('/auth/register', register)
  .post('/auth/login', login)
  .get('/auth/logout', logout)
  .get('/auth/session', getSession)
  .put('/api/user/:id', editUser)
  .delete('/api/user/:id', deleteUser)
  .get('/api/event/', getEvents)
  .post('/api/event/', createEvent)
  .post('/api/attendee/', joinEvent);

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`Roger Rodger on port ${SERVER_PORT}`));
