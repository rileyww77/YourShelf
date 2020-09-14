const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');



  //get details for one project
router.get('/:p_id', rejectUnauthenticated, (req, res) => {
    let id = req.params.p_id
    console.log(id)
    const queryText = `
    SELECT * FROM "projects" 
    JOIN "user" on "user".id = "projects".user_id
    WHERE "projects".p_id = $1;
    `
    pool.query(queryText, [id])
      .then((result) => {
        console.log(result.rows)
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error on detail get query ${error}`);
        res.sendStatus(500);
      });
  });



router.put('/', rejectUnauthenticated, (req, res) => {
  let updates = req.body
  console.log(updates)
  const updateQuery= `UPDATE "projects" 
  SET "name" = $1,
  "image" = $2,
  "supplies" = $3,
  "description" = $4
  WHERE p_id=$5
  `
  pool.query(updateQuery, [updates.name, updates.image, updates.supplies, updates.description, updates.p_id])
  .then ((result) => {
      res.sendStatus(200)
  }) .catch((error) => {
    console.log(`Error on updates post query ${error}`);
    res.sendStatus(500);
  });
});

module.exports = router;