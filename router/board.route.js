const express = require("express")
const router = express.Router()
const controller = require("../controller/board.controller")


router.get('/', controller.home)

router.get('/list', controller.list)

router.get('/write', controller.write)

router.post('/write', controller.Pwrite)

router.get('/view', controller.view)

router.get('/modify', controller.modify)

router.post('/modify', controller.Pmodify)

router.get('/delete', controller.delete)

module.exports = router