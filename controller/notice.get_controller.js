const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

exports.index = (req, res) => {
    res.render('notice/index.html', { path:'notice' })
}

exports.list = (req, res) => {
    res.render('notice/list.html', { items, path:'notice' })
}

exports.write = (req, res) => {
    res.render('notice/write.html', { path:'notice' })
}

exports.view = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('notice/view.html', { item, path:'notice' })
}

exports.modify = (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }
    res.render('notice/modify.html', { item , path:'notice'})
}

exports.delete = (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect(`/notice/list`)
}

exports.write_post = (req, res) => {
    const { content, subject, name } = req.body
    items.push({content, subject, name})
    
    res.redirect(`/notice/view?index=${items.length-1}`)
}

exports.modify_post = (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`/notice/view?index=${index}`)
}