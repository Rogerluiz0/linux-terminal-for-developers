const path = require( 'path' )

const controller = {
  renderHome( request, response ) {
    response.render( path.join(  __dirname + '/../../public/index.html' ) )
  },
  renderTerminal( request, response ) {
    response.sendFile( path.join(  __dirname + '/../../public/pages/terminal.html' ) )
  },
  renderAbout( request, response ) {
    response.sendFile( path.join(  __dirname + '/../../public/pages/about.html' ) )
  }
}

module.exports = controller