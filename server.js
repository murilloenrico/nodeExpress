const express = require('express')
const app = express()

app.use(express.static('public'))

var porta = 3000

app.listen(3000, () => console.log("Servidor rodando: " + `http://localhost:${porta}`))