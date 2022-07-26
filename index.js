const express = require('express')

const app = express()

app.get('/redirect', (req, res) => {
    res.redirect('http://google.com')
})


app.listen(8000, () => console.log("Server is running on port: 8000"))