require( 'dotenv' ).config()
const config = require( './config.js' )

const nunjucks = require( 'nunjucks' )
const path = require( 'path' )

const express = require( 'express' )
const app = express()

const PORT = config.app.port

nunjucks.configure( path.join( __dirname , '/../public/pages' ) , { 
  express: app,
  noCache: true
} )

app.use( express.static( path.join( __dirname , '/../public/' ) ) )

app.get( '/', ( req , res ) => {
  res.render( 'index.html' )
} )

app.get( '*', ( req , res ) => {
  res.render( 'pageNotFound.html' ) 
} )

app.listen( PORT , ( err ) => {
  if ( err ) { console.log( 'erro' ) }
   console.log( `Server running on localhost:${PORT}` )
} )