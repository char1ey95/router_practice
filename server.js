const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.use(express.urlencoded({ extended : false }))
app.use(express.static('public'))
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})


// controller
const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

// router, controller
app.get('/', (req, res) => {
    res.render('index.html')
})

// router, controller
app.get('/list', (req, res) => {

    res.render('board/list.html', { items })
})

// router, controller
app.get('/write', (req, res) => {
    res.render('board/write.html')
})

// router, controller
app.post('/write', (req, res) => {
    const { content, subject, name } = req.body
    items.push({content, subject, name})
    
    res.redirect(`view?index=${items.length-1}`)
})

// router, controller
app.get('/view', (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }

    res.render('board/view.html', { item })
})

// router, controller
app.get('/modify', (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('board/modify.html', { item })
})

// router, controller
app.post('/modify', (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`/view?index=${index}`)
})

// router, controller
app.get('/delete', (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect('/list')
})

app.listen(PORT, () => {
    console.log('server start')
})