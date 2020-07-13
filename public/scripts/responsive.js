window.addEventListener( 'load' , () => {

  const width = window.innerWidth
  const span = document.querySelectorAll( 'span' )

  if ( width <= 900 ) {
    for ( let i = 0; i < 2; i++  ) {
      span[i].classList.remove( 'efect' )
    }
  }

} )