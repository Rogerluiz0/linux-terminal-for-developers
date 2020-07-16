const path = require( 'path' )

const controller = {
  renderHome(req, res) {
    res.render( path.join(  __dirname + '/../../public/index.html' ) )
  },
  renderTerminal(req, res) {
    res.sendFile( path.join(  __dirname + '/../../public/pages/terminal.html' ) )
  },
  renderAbout(req, res) {
    res.sendFile( path.join(  __dirname + '/../../public/pages/about.html' ) )
  }
}

module.exports = controller