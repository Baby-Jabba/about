const { Client, Pool } = require('pg');
const load = require('../load.js');

const records = 10000000;
const batch = 10000;

const client = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  database: 'postgres',
});

const sdcClient = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  database: 'sdc',
});

const seedSql = `INSERT INTO destinations (data) VALUES`;

const seed = function (number, loadNumber, remaining = number) {
  if (remaining <= 0) {
    console.log(`${number} items inserted`);
    return sdcClient.end();

  }
  let values = load(loadNumber);
  sdcClient.query(`${seedSql} ${values}`, (err) => {
    if (err) { console.log(err); }
    return (seed(number, loadNumber, remaining - loadNumber));
  });
};

client
  .connect()
  .then(() => {
    console.log('connected to postgres client');
    return client.query('DROP DATABASE IF EXISTS sdc');
  })
  .then(() => {
    return client.query('CREATE DATABASE sdc');
  })
  .then(() => {
    console.log('new sdc database created');
    return client.end();
  })
  .then(() => {
    return sdcClient.connect();
  })
  .then(() => {
    console.log('connected to sdc database');
    return sdcClient.query(
      `CREATE TABLE destinations (
        id SERIAL NOT NULL PRIMARY KEY ,
        data JSON NOT NULL
    )`);
  })
  .then(() => {
    console.log('table \'destinations\' created \nseeding...');
    return seed(records, batch);
  })
  .catch((err) => console.log(err));




