window.addEventListener( 'load' , () => {
  const button = document.querySelector( '.button-dark-theme' )
  
  const span = document.querySelectorAll( 'span' )
  const body = document.querySelector( 'body' )
  const blockquote = document.querySelector( 'main section#introduction blockquote' )

  button.addEventListener( 'click' , () => {
    if ( button.value == 'Dark Theme' ) {
      button.value = 'White Theme'
      body.style.backgroundColor = '#2D2D2D'
      body.style.color = '#FFFFFF'
      span.forEach( element => {
        element.style.backgroundColor = '#202024'  
      } )
      blockquote.style.borderLeft = '0.5rem solid #202024'
    } else {
      button.value = 'Dark Theme'
      body.style.backgroundColor = '#F1F1F1'
      body.style.color = '#000000'
      span.forEach( element => {
        element.style.backgroundColor = '#C0C0C0'  
      } )
      blockquote.style.borderLeft = '0.5rem solid #C0C0C0'
    }
  } )
} )