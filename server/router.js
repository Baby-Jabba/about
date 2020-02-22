const express = require('express');
const router = express.Router();
const connection = require('../database/postgres/index.js');
var db = require('../database/postgres');


router.route('/:id')
  .get((req, res) => {
    connection.query('SELECT data FROM destinations WHERE id = $1 LIMIT 1', [req.params.id])
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).send('destination not found');
        } else {
          res.send(result.rows[0].data);
        }
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  })
  .put((req, res) => {
    let query = req.query;
    let queryKey = Object.keys(query)[0];
    let id = req.params.id;
    connection.query('UPDATE destinations SET data=$1 WHERE id=$2', [query[queryKey], id])
      .then(result => { res.send(`item #${id} updated`); })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  })
  .post((req, res) => {
    connection.insert(req.body)
      .then(() => { res.status(200).send('success!'); })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  })
  .delete((req, res) => {
    let param = req.params.id;
    db.query('DELETE FROM destinations WHERE id=($1)', [param])
      .then((result) => {
        if (result.rowCount === 0) {
          res.status(404).send('destination not found');
        } else {
          res.status(200).send(`deleted item ${param}`);
        }
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });


// TO DISPLAY SEEDED DATA IN POSTMAN
router.route('/display-seed')
  .get((req, res) => {
    db.query('SELECT * FROM about', (err, data) => {
      if (err) {
        console.log('error at server/router.js /display-seed', err);
      } else {
        res.send({ data });
      }
    });
  });

module.exports = router;
