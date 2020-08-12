const router = require('express').Router()
const controller = require('./../controllers/index.js')

const { pageHome , pageTerminal , pageAbout , page404 } = controller

router.get( '/' , pageHome )
router.get( '/terminal' , pageTerminal )
router.get( '/about' , pageAbout )
router.get( '*' , page404 )

module.exports = router