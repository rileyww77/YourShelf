const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});


router.post('/', (req, res) => {
  // POST route code here
  let project = req.body
  console.log(project)
  const queryText = `INSERT INTO "favorites" ("user_id", "project_id")
  VALUES ($1, $2)`
  pool.query(queryText, [project.user_id, project.project_id])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      res.sendStatus(500)
      console.log('error posting new project(router)', error)
    })
});

module.exports = router;