const express = require('express')
const parser = require('body-parser')
const mon = require('mongoose')

mon.connect('mongodb://admin:admin@ds135760.mlab.com:35760/e-commerce-aca')

const app = express()

app.use(parser.json())
//Input routes here

app.use(require('./Routes/orderRoute'))


app.listen(3001, () => console.log('Listening on port 3001!'))