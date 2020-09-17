const nunjucks = require( 'nunjucks' )
const path = require( 'path' )

const routes = require( './routes/routes.js' )

const express = require( 'express' )
const app = express()

app.use( express.static( path.join( __dirname , '/../public/' ) ) )

app.get( '/', routes )

module.exports = app