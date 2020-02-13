const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'student',
  password: process.env.RDS_PASSWORD || 'student',
  database: 'HRR43_FEC'
});
connection.connect();

module.exports = connection;