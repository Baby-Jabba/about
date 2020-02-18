const mysql = require('mysql');
const load = require('./load.js');
const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'student',
  password: process.env.RDS_PASSWORD || 'student',
  database: 'HRR43_FEC'
});
connection.connect();

var insert = function (callback) {
  var values = load(1);
  connection.query(sql, [values], (err, data) => {
    console.log(data);
    callback(err, data);
  });
};

module.exports.connection = connection;
module.exports.insert = insert;