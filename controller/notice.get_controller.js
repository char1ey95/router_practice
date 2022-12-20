const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

exports.index = (req, res) => {
    res.render('notice/index.html')
}

exports.list = (req, res) => {
    res.render('notice/list.html', { items })
}

exports.write = (req, res) => {
    res.render('notice/write.html')
}

exports.view = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('notice/view.html', { item })
}

exports.modify = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('notice/modify.html', { item })
}

exports.delete = (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect('notice/list.html')
}