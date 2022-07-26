const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to My website</h1>')
})

app.get('/home', (req, res) => {
    res.status(200).send('<h1>This is home page</h1>')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(8000, () => console.log('Server running on port: 8000'))