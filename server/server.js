const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;
console.log('Server is on port ' + port);

const buildDir = path.join(__dirname, '../build');

app.use(cors());//cors needed for API to work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(buildDir));

app.get("/", function(req, res){
    res.sendFile(buildDir + '/index.html');
});

app.listen(port, function () {
    console.log("app running");
});

var router = express.Router();

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
        var output = JSON.parse(JSON.stringify(row));
        console.log(output.address);
        //accessed at GET http://localhost:port/api), where port==5000 usually
        router.get('/', function(req, res) {
            res.json({ address: output.address });   
        });
        app.use('/api', router);
    }
    client.end();
});