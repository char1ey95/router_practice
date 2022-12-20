const express = require('express')
const PORT = process.env.SERVER_PORT || 3000

const app = express()

const nunjucks = require('nunjucks')
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true,
})


app.get('/', (req, res) => {
    res.render('index.html')
})


app.listen(PORT, () => {
    console.log('server start')
})