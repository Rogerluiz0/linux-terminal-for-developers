const path = require( 'path' )

const controller = {
  pageHome( req, res ) {
    res.render( 'index.html' )
  },
  pageTerminal( req, res ) {
    res.render( 'terminal.html' )
  },
  pageAbout( req, res ) {
    res.render( 'about.html' )
  },
  page404( req, res ) {
    res.render( '404-error.html' )
  }
}

module.exports = controller