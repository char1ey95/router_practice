const express = require("express")
const router = express.Router()
const notice = require('./notice.route')

router.use('/notice', notice)