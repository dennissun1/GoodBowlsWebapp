const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('../build'));

app.get("/", function(req, res){
    res.sendFile('../build/index.html');
});
        
app.listen(port, function () {
    console.log("app running");
});


//db code

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    SSL: true
});

client.connect();

client.query('SELECT * FROM map;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});