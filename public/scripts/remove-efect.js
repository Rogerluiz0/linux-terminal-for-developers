window.addEventListener( 'load' , () => { 

  if ( screen.width <= 900 ) {
    document.querySelectorAll( 'span' )[0].removeAttribute( 'class' )
    document.querySelectorAll( 'span' )[1].removeAttribute( 'class' )
  }

} )

