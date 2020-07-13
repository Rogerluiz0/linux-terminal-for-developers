const express = require( 'express' )
const app = express()
const path = require( 'path' )
const routes = require( './routes.js' )

app.use( express.static( path.join( __dirname, '/../public' ) ) )

app.get( '/', routes )
app.get( '/terminal', routes )
app.get( '/about-me', routes )

module.exports = app