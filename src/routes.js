const express = require( 'express' )
const path = require( 'path' )
const router = require('express').Router()
const controller = require('@controller/index.js')

router.use( express.static( path.join( __dirname, '/../public' ) ) )

router.get( '/', controller.renderHome )
router.get( '/terminal', controller.renderTerminal )
router.get( '/about-me', controller.renderAboutMe )

module.exports = router