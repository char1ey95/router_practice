const express = require("express")
const router = express.Router()
const getController = require('../controller/notice.get_controller')
// const postController = require('../controller/notice.post_controller')

router.get('/', getController.index)
router.get('/list', getController.list)
router.get('/write', getController.write)
router.get('/view', getController.view)
router.get('/modify', getController.modify)
router.get('/delete', getController.delete)

router.post('/write', getController.write_post)
router.post('/modify', getController.modify_post)
// router.route('/write').post(postController).get(getController)
// router.route('/modify').post(postController).get(getController)

module.exports = router