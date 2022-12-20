const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

exports.home = (req, res) => {
    res.render('board/index.html')
}

exports.list = (req, res) => {
    res.render('board/list.html', { items })
}

exports.write = (req, res) => {
    res.render('board/write.html')
}

exports.Pwrite = (req, res) => {
    const { content, subject, name } = req.body
    items.push({ content, subject, name })

    res.redirect(`/view?index=${items.length - 1}`)
}

exports.view = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index
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

exports.Pmodify = (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`/view?index=${index}`)
}

exports.delete = (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect('/list')
}