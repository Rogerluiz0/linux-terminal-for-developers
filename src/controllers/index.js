const controller = {
  pageHome( req , res ) {
    res.render( 'index.html' )
  },
  page404( req , res ) {
    res.render( 'pageNotFound.html' ) 
  }
}

module.exports = controller