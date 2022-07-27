const express = require('express');
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/page/index.html'));
    console.log(__dirname)
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/page/logIn.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/page/register.html'));
});

app.post('/submit-login', (req, res) => {
    res.redirect('/')
});

app.post('/submit-register', (req, res) => {
    res.redirect('/')
});


app.listen(8000, () => console.log('Server running on port: 8000'));