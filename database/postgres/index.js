const { Client } = require('pg');
const client = new Client({
  user: 'student',
  host: 'localhost',
  database: 'SDC',
  password: 'student',
  port: 5432,
});
client.connect();

module.export = {
  insert: () => { },
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  }
};