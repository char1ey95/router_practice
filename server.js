const express = require('express')
const nunjucks = require('nunjucks')
const { login } = require('./middlewares')
const app = express()
const router = require("./router")

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))




app.use(router)


app.listen(3000, (req, res) => {
    console.log('server start')
})