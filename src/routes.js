const router = require('express').Router()
const controller = require('./controller/index.js')

router.get( '/', controller.renderHome )
router.get( '/terminal', controller.renderTerminal )
router.get( '/about', controller.renderAbout )

module.exports = router