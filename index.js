const express = require('express');

const app = express()

app.get('/', (req, res) => {
    // res.send('<h2>My first Web App using Express</h2>')
    // res.send({ title: "My first Web App", message: "Our Web App Api"})
    res.json({ title: "My first Web App", message: "Our Web App Api"})
})


app.listen(8000, () => console.log('Server running at port: 8000'));