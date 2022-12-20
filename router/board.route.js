const express = require("express")
const router = express.Router()

const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]


router.get('/', (req, res) => {
    res.render('board/index.html')
})

router.get('/list', (req, res) => {
    res.render('board/list.html', { items })
})

router.get('/write', (req, res) => {
    res.render('board/write.html')
})

router.post('/write', (req, res) => {
    const { content, subject, name } = req.body
    items.push({ content, subject, name })

    res.redirect(`/view?index=${items.length - 1}`)
})

router.get('/view', (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index
    }
    res.render('board/view.html', { item })
})

router.get('/modify', (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('board/modify.html', { item })
})

router.post('/modify', (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`/view?index=${index}`)
})

router.get('/delete', (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect('/list')
})

module.exports = router