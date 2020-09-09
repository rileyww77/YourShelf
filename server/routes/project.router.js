const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET all projects with username of who created the project
  const queryText = 'SELECT * FROM "projects" JOIN "user" ON "user".id = "projects".user_id;'
  pool.query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in getting projects (server)', error)
      res.sendStatus(500)
    })
});

router.get('/:userId', (req, res) => {
  //get projects that the user created
  let id = req.params.userId
  console.log(id)
  const queryText = `
    SELECT * FROM "projects"
    JOIN "user" ON "user".id = "projects".user_id 
    WHERE "projects".user_id = $1;
    `
  pool.query(queryText, [id])
    .then((result) => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on user project get query ${error}`);
      res.sendStatus(500);
    });
});

//get details for one project
router.get('/:id', (req, res) => {
  let id = req.params.id
  console.log(id)
  const queryText = `
  SELECT * FROM "projects" 
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
  // POST new project with username of who created it
  let project = req.body
  console.log(project)
  const queryText = `INSERT INTO "projects" ("user_id", "name", "image", "supplies", "description")
  VALUES ($1, $2, $3, $4, $5)`
  pool.query(queryText, 
    [project.user_id, project.name, project.image, project.supplies, project.description])
    .then((result) => {
    res.sendStatus(201);
  }) .catch((error) => {
    res.sendStatus(500)
    console.log('error posting new project(router)', error)
  })
});

module.exports = router;