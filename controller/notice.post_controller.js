const items = [
    {
        subject: '첫번째 게시물',
        content: 'content',
        name: 'name...',
    }
]

exports.write = (req, res) => {
    const { content, subject, name } = req.body
    items.push({content, subject, name})
    
    res.redirect(`notice/view?index=${items.length-1}`)
}

exports.modify = (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    res.redirect(`notice/view?index=${index}`)
}