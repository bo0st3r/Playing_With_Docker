const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.json([
    {
        name:'Bob',
        email: 'bob@gmail.com'
    },
    {
        name:'Marie',
        email: 'marie@outlook.be'
    },
    {
        name:'Paul',
        email: 'paul@outlook.be'
    },
    {
        name:'Christopher',
        email: 'christopher@outlook.us'
    },
]))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
