const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

const buildDir = path.join(__dirname, '../build');

app.use(express.static(buildDir));

app.get("/", function(req, res){
    res.sendFile(buildDir + '/index.html');
});
        
app.listen(port, function () {
    console.log("app running");
});


//db code
const { Client } = require('pg');

const client = new Client({
    user: 'mspkzoomifopri',
    host: 'ec2-23-23-153-145.compute-1.amazonaws.com',
    database: 'dtbm7brrdl65',
    password: 'a242718e221e1b5ce5e1f18f924cb31997e017d3a852a5f433cc67b8fa66da7c',
    port: 5432,
    ssl: true
},);

client.connect();

client.query('SELECT * FROM map;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});