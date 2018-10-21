import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('../build'));

app.get("/", function(req, res){
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );
    const indexFile = path.resolve('../build/index.html');
    fs.readFile(indexFile, 'utf8', function(err, data) {
        if (err){
            console.error('Somthing went wrong:', err);
            return res.status(500).send('Something goes wrong');
        }
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    })
});
        
app.listen(port, function () {
    console.log("app running");
});