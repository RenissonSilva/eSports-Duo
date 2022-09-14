import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
    res.json([
        {id: 1 , name: '1'},
        {id: 2 , name: '2'},
        {id: 3 , name: '3'},
    ])
})

app.listen(3333)