window.addEventListener( 'load' , () => {
 
 const postWrap = document.querySelector( '.container-main' )
 const bar = document.createElement( 'div' )

 bar.style.height = '4px'
 bar.style.backgroundColor = '#5569F8'
 bar.style.position = 'fixed'
 bar.style.top = '0'
 bar.style.left = '0'
 bar.style.zIndex = '9999'
 bar.style.transition = '0.2s'

 document.body.append(bar) 

 document.addEventListener( 'scroll' , () => {
  const textHeight = postWrap.offsetHeight
  const pagePositionY = window.pageYOffset

  const updatedBar = pagePositionY * 100 / textHeight

  bar.style.width = updatedBar + '%'

 } )
} )

