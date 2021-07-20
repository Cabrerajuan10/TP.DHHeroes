const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/berners-lee', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'berners-lee.html')));
app.get('/clarke', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'hopper.html')));
app.get('/lovelace', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'lovelace.html')));
app.get('/turing', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'turing.html')));


app.listen(port, ()=> console.log("Servidor corriendo en http://localhost:" + port ));