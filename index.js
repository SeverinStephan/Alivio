const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/solutions', (req, res) => {
    res.sendFile('./views/solutions.html', { root: __dirname })
})

app.get('/community', (req, res) => {
    res.sendFile('./views/community.html', { root: __dirname })
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

