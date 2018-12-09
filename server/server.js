const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser')

const app = express();

const port = process.env.PORT || 8080;
console.log('Server is on port ' + port);

const buildDir = path.join(__dirname, '../build');

app.use(cors());//cors needed for API to work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(buildDir));
app.use(cookieParser());



var router = express.Router();
app.use('/api', router);

//db code
const { Client } = require('pg');

var opts={
    user: 'mspkzoomifopri',
    host: 'ec2-23-23-153-145.compute-1.amazonaws.com',
    database: 'dtbm7brrdl65',
    password: 'a242718e221e1b5ce5e1f18f924cb31997e017d3a852a5f433cc67b8fa66da7c',
    port: 5432,
    ssl: true
}


router.get('/login',function (req,res) {
    var username = req.query.username;
    var password = req.query.password;
    const c = new Client(opts);
    c.connect();
    c.query("select * from login where username=\'" + username + "\'and password=\'" + password + "\'", function (err,result) {

        if (err) throw err;
        if (result.rows.length!=0){
            res.cookie("name",username);
            res.cookie("password",password).send("cookie set");
        }
        else{
            res.send('not ok')
        }
        c.end();
    })
})

router.post('/newfarm', function (req,res) {
    const c = new Client(opts);
    c.connect();
    c.query("insert into map (address, name, ingredients, type, latitude, longitude) values (\'" + req.body.address + "\',\'" + req.body.name + "\',\'" + req.body.ingredients + "\',\'" + req.body.type + "\',\'" + req.body.latitude + "\',\'" +req.body.longitude +"\')", function (err,result){
        if (err){
            console.log(err);
        }
        res.send("success");
        c.end;
    })
})


router.post('/newstore', function (req,res) {
    const c = new Client(opts);
    c.connect();
    c.query("insert into map (address, name, type, latitude, longitude) values (\'" + req.body.address + "\',\'" + req.body.name + "\',\'" + req.body.type + "\',\'" + req.body.latitude + "\',\'" +req.body.longitude +"\')", function (err,result){
        if (err){
            console.log(err);
        }
        res.send("success");
        c.end;
    })
})

router.post('/newpost', function (req,res) {

    const c = new Client(opts);
    c.connect();
    c.query("insert into feed (title, announcement, today) values (\'" + req.body.title + "\',\'" + req.body.feed +"\',NOW())",function (err,result){
        if (err) throw err;
        res.send("success");
        c.end();
    })
})

router.delete('/deletefeed', function (req, res){
    const c = new Client(opts);
    c.connect();
    console.log(req.body.id);
    c.query("delete from feed where id=\'"+req.body.id + "\'",  function (err, result){
        if (err){
            console.log(err);
        }
        res.send("success");
        c.end();
    })
})

router.delete('/deletestore', function (req,res) {
    const c = new Client(opts);
    c.connect();
    c.query("delete from map where address=\'" + req.body.address + "\'", function (err,result) {
        if(err){
            console.log(err);
        }
        res.send("success");
        c.end();
    })
})

router.delete('/deletefarm', function (req,res) {
    const c = new Client(opts);
    c.connect();
    c.query("delete from map where address=\'" + req.body.address + "\'", function (err,result) {
        if(err){
            console.log(err);
        }
        res.send("success");
        c.end();
    })
})

router.get('/posts', function (req,res) {
    const c = new Client(opts);
    c.connect();
    var output = [];
    c.query("Select * from feed;", (err,result)=> {
        if (err) throw err;
        for (let row of result.rows) {
            var temp = JSON.parse(JSON.stringify(row));
            output.push(temp)
        }
        res.json(output);
        c.end;

    })
})

router.get('/auth',function (req,res) {
    var username = req.cookies.name;
    var password = req.cookies.password;
    const c = new Client(opts);
    c.connect();
    c.query("select * from login where username=\'" + username + "\'and password=\'" + password + "\'", function (err,result) {

        if (err) throw err;
        if (result.rows.length!=0){
            res.send("ok");
        }
        else{
            res.send('not ok')
        }
        c.end();
    })


})

app.get('/mapapi',function (req,res) {
    const client = new Client(opts);
    client.connect();

    client.query('SELECT * FROM map;', (err, result) => {
        if (err) throw err;
        var rowNum=0;
        var output = [];
        for (let row of result.rows) {
            var temp = JSON.parse(JSON.stringify(row));
            output.push(temp)
        }
        res.json(output);

        client.end();
    });
})

app.get("/*", function(req, res){
    res.sendFile(buildDir + '/index.html');
});

app.listen(port, function () {
    console.log("app running");
});