const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM "projects" JOIN "user" ON "user".id = "projects".user_id;'
  pool.query(queryText)
  .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
  })
  .catch ((error) => {
    console.log('error in getting projects (server)', error)  
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;