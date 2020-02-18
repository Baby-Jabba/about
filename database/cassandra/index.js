const cassandra = require('cassandra-driver');
const config = require('./config.js');

const client = new cassandra.Client(config);

client.connect()
  .then(() => {
    console.log('connected to cassandra sdc keyspace');
  });

module.exports = {
  retrieve: (param) => {
    console.log(param);
    return (client.execute('SELECT data FROM destinations WHERE id = ?', [param]));
  }
};