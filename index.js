const express = require('express');
const { get } = require('http');

const app = express();


app.get('/todos', (req, res) => {
    res.json({ "message": `${req.method} todos` })
});

app.post('/todos', (req, res) => {
    res.json({ "message": `${req.method} todos` })
});

app.put('/todos', (req, res) => {
    res.json({ "message": `${req.method} todos` })
});

app.patch('/todos', (req, res) => {
    res.json({ "message": `${req.method} todos` })
});

app.delete('/todos', (req, res) => {
    res.json({ "message": `${req.method} todos` })
});



app.listen(8000, () => console.log("Server run at port: 8000"));