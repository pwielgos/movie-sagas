const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return all movies from database
router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM "movies" WHERE "id" = 1;'
  console.log('in movie router.get', req.body)
  pool.query(queryText, [req.params.id])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(error => {
      console.log('error in movieList GET', error)
      res.sendStatus(500);
    })
})

module.exports = router;