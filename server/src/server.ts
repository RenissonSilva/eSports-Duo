import express from 'express'

const app = express()

app.get('/games', (req, res) => {
    return res.json([]);
})

app.get('/games/:id/ads', (req, res) => {
    // const gameId = req.params.id;

    res.json([])
})

app.post('/ads', (req, res) => {
    return res.json([]);
})

app.get('/ads/:id/discord', (req, res) => {
    // const adId = req.params.id;

    res.json([])
})

app.listen(3333)