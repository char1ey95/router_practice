const express = require('express')
// const router = express.Router()
const app = express()
const router = require('./routes')
const nunjucks = require('nunjucks')
const { login } = require('./middleware/index')

app.set('view engine', 'html')

nunjucks.configure('views', {
    express: app,
})

app.use(express.static('public'))
app.use(express.urlencoded( {extended:false} ))

app.use((req, res, next) => {
    req.login = req.query.id

})
// const boardRouter = require('./router/board.route')
// const noticeRouter = require('./router/notice.route')
// const galleryRouter = require('./router/gallery.route')

// app.get('/board/list', (req, res) => {
//     res.send('/ page')
// })

// app.use(
//     '/board/', 
//     router.get('/list'), (req, res) => {
//     res.send('/ page')
// })

// app.use('/board/', (req, res) => {
//     if(req.method === 'get' && req.path === 'board/list') {

//     } else if( req.method === 'get' && req.path === 'board/write') {

//     }
// })



/*
{
    method:'get',
    path: '/list',
    callback : (req, res) => {
        res.send("/ page")
    }
}
*/

// get이면서 list일때 실행
// router.get('/list', (req, res) => {
//     res.send('/ page')
// })

// router.get('/write', (req, res) => {
//     res.send('/ page')
// })

// router.get('/modify', (req, res) => {
//     res.send('/ page')
// })


// app.use('/board', boardRouter) // board/list,write,modify
// app.use('/notice', noticeRouter) // notice/list,write,modify
// app.use('/gallery', galleryRouter) // gallery/list,write,modify


app.listen(3000, () => {
    console.log('server start')
})