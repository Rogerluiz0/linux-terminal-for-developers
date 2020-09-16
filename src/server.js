require( 'dotenv' ).config()

const app = require( './app.js' )
const config = require( './config/index.js' )

const PORT = config.app.port

app.listen( PORT , ( err ) => {
  if ( err ) { console.log( 'erro' ) }
  console.log( `Server running on localhost:${PORT}` )
} )