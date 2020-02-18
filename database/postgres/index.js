const { Client } = require('pg');
const client = new Client({
  user: 'student',
  host: 'localhost',
  database: 'sdc',
  password: 'student',
  port: 5432,
});
client.connect()
  .then(() => {
    console.log('connected to postgres sdc database');
  });

module.exports = {
  insert: () => { },
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  }
};