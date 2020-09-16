const router = require('express').Router()
const controller = require('./../controllers/index.js')

const { pageHome , page404 } = controller

router.get( '/' , pageHome )
router.get( '*' , page404 ) // Esta rota deve sempre ser a última!

module.exports = router