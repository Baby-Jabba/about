const cassandra = require('cassandra-driver');
const load = require('./load.js');
const config = require('./config.js');

const records = 10000000;
const batch = 10;



const client = new cassandra.Client(config);

const seed = function (number, loadNumber, remaining = number) {
  if (remaining <= 0) {
    console.log(`sdc.destinations seeded with ${records} records`);
    return client.shutdown();

  }
  let values = load(loadNumber, number - remaining);
  client.execute(`
  BEGIN UNLOGGED BATCH
  ${values}
  APPLY BATCH;
  `, (err) => {
    if (err) { console.log(err); }
    return (seed(number, loadNumber, remaining - loadNumber));
  });
};

client.connect()
  .then(() => {
    console.log('connected to cassandra database');
    return client.execute('DROP KEYSPACE IF EXISTS sdc');
  })
  .then(() => {
    return client.execute(`create KEYSPACE sdc WITH replication = {'class':'SimpleStrategy','replication_factor':1}`);
  })
  .then(() => {
    return client.execute('use sdc');
  })
  .then(() => {
    console.log('sdc keyspace created');
    return client.execute(`CREATE TABLE destinations ( id int, data TEXT;`);
  })
  .then(() => {
    console.log('destinations table created\nseeding...');
    return seed(records, batch);
  })
  .catch(err => console.log(err));