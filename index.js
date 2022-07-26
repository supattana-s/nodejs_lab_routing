const express = require('express');
const fs = require('fs/promises')

const app = express()

app.get('/', async (req, res) => {
    const data = await fs.readFile('./page/index.html', 'utf-8')
    res.status(200).send(data)
})

app.get('/home', async (req, res) => {
    const data = await fs.readFile('./page/home.html', 'utf-8')
    res.status(200).send(data)
})

app.get('*', async (req, res) => {
    const data = await fs.readFile('./page/notFound.html', 'utf-8')
    res.status(404).send(data)
})

app.listen(8000, () => console.log('Server running on port: 8000'))