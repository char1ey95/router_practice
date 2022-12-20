const { application } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('../controller/board.controller')


// router.get('/list', (req, res) => {
//     res.send("board/ list 입니다.")
// })

// router.get('/write', (req, res) => {
//     res.send('board/ write 입니다.')
// })

// router.get('/view', (req, res) => {
//     res.send("board /view 입니다.")
// })

// router.get('/delete', (req, res) => {
//     res.send("board /delete 입니다.")
// })

router.get('/list', controller.list)

router.get('/write', controller.write)

router.get('/view', controller.view)

router.get('/delete', controller.delete)

module.exports = router
