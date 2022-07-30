const express = require('express')

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: "hello server" })
})

app.listen(4000, () => {
    console.log(`server is started on 4000`)
})