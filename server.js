require( 'dotenv' ).config()
require( 'module-alias/register' )

const app = require( '@app' )
const config = require( '@config' )

app.listen( config.app.port , () => {
  console.log( `Server running on localhost:${config.app.port} or 127.0.0.1:${config.app.port}` )
} )  