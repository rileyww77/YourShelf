const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



  //get details for one project
router.get('/:p_id', (req, res) => {
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



router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;