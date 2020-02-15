const express = require('express');
const router = express.Router();
const connection = require('../database/postgres').db;
var db = require('../database/postgres');


router.route('/:id')
  .get((req, res) => {
    let param = req.params.id;
    connection.query('SELECT * FROM about WHERE id=(?)', [param], (err, data) => {
      if (err) {
        console.log('error at server/router.js GET/:id', err);
      } else {
        // res.set('Access-Control-Allow-Origin', '*'); // my proxy
        res.send(data);
      }
    });
  })
  .put((req, res) => {
    let query = req.query;
    let queryKey = Object.keys(query)[0];
    let id = req.params.id;
    console.log([queryKey, query[queryKey], id]);
    db.connection.query(`UPDATE about SET ${queryKey}=? WHERE id=?`, [query[queryKey], id]);
  })
  .post((req, res) => {
    db.insert((err, data) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send();
      }

    });
  })
  .delete((req, res) => {
    let param = req.params.id;
    db.query('DELETE FROM about WHERE id=(?)', [param], (err, data) => {
      if (err) {
        console.log('error, could not delete: ', err);
      } else {
      }
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
