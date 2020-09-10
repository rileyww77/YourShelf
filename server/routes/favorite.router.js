const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//get favorites for one user
router.get('/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    const queryText = `
    SELECT * FROM "favorites"
    JOIN "user" ON "user".id = "favorites".user_id
    JOIN "projects" ON "projects".p_id = "favorites".project_id
    WHERE "favorites".user_id = $1;
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

//add a new favorite
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

//delete a favorite
router.delete('/:id', (req, res) => {
    pool.query(`DELETE FROM "favorites" 
                WHERE fav_id=$1`, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
      }).catch((error) => {
        console.log('error deleting favorite (router)', error)
        res.sendStatus(500)
      })
  })

module.exports = router;