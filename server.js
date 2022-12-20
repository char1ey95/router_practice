const express = require('express')
const PORT = process.env.SERVER_PORT || 3000

const app = express()

const nunjucks = require('nunjucks')
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true,
})

// 미들웨어 영역 시작 ====================================================


app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/list', (req, res) => {
    // 내부적으로 path.join을 해주기 때문에 이렇게 적는다.
    res.render('board/list.html')
})

app.get('/view', (req, res) => {
    res.render('board/view.html')
})

app.get('/write', (req, res) => {
    res.render('board/write.html')
})

app.get('/modify', (req, res) => {
    res.render('board/modify.html')
})


// 미들웨어 영역 끝 =====================================================

app.listen(PORT, () => {
    console.log('server start')
})