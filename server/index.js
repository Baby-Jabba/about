require('newrelic');
const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/bundle.js', express.static(__dirname + '/../public/bundle.js')); // for proxy server
app.use('/api/about', router);
app.use('/:id', express.static(__dirname + '/../public'));

app.listen(process.env.PORT || 50001, console.log(`Listening on port ${process.env.PORT || 50001}`));

module.exports = app;