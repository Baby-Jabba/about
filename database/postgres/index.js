const { Client } = require('pg');
const load = require('../load.js');
const client = new Client({
  user: 'student',
  host: 'localhost',
  database: 'sdc',
  password: 'student',
  port: 5432,
});
client.connect()
  .then(() => { console.log('connected to postgres sdc database'); });


module.exports = {
  insert: () => {
    let seedSql = 'INSERT INTO destinations (data) VALUES';
    let values = load(1);
    return client.query(`INSERT INTO destinations (data) VALUES ${values} RETURNING id`);
  },
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  }
};

