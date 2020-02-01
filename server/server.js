const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.get('/api/movies', (req, res) => {
    pool.query(`SELECT * FROM "movies";`)
      .then(result => {
        console.log(result.rows)
        res.send(result.rows)
      }).catch(error => {
        console.log('error in movieList GET', error)
        res.sendStatus(500);
      })
  })

app.get('/api/movies/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM "movies" WHERE "id" = $1 LIMIT 1;'
    console.log('in movie router.get', req.body)
    pool.query(queryText, [req.params.id])
      .then(result => {
        console.log(result.rows)
        res.send(result.rows[0])
      }).catch(error => {
        console.log('error in movieList GET', error)
        res.sendStatus(500);
      })
  })

  app.get('/api/genres/:id', (req, res) => {
    const queryText = `SELECT * FROM "genres"
    JOIN "movies_genres"
    ON "movies_genres"."genre_id"="genres"."id"
    WHERE "movie_id"=$1;`
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

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});