const router = require('express').Router()
const controller = require('./../controllers/index.js')

const { pageHome , page404 } = controller

router.get( '/' , pageHome )

module.exports = router