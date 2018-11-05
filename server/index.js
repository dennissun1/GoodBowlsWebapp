require('ignore-styles');
require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', 'react-app']
});

require('./server');

console.log("test");

//db code
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM map;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});