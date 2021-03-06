const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const icon = req.body.icon;

  const queryText = `INSERT INTO "user" (username, password, icon)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, icon])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

//get user for one project
router.get('/:id', rejectUnauthenticated, (req, res) => {
  let id = req.params.id
  console.log('single', id)
  const queryText = `
  SELECT "user".username, "projects".user_id FROM "user" 
  JOIN "projects" ON "projects".user_id = "user".id
    WHERE "user".id = $1;
  `
  pool.query(queryText, [id])
    .then((result) => {
      console.log('these are', result.rows)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on detail get query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
