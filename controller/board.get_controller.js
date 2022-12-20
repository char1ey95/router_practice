const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

exports.index = (req, res) => {
    res.render('index.html')
}

exports.list = (req, res) => {
    res.render('board/list.html', { items })
}

exports.write = (req, res) => {
    res.render('board/write.html')
}

exports.view = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('board/view.html', { item })
}

exports.modify = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('board/modify.html', { item })
}

exports.delete = (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect('/list')
}