function cliqueModal ( img ) {
  const janelaModal = document.getElementById( 'janelaModal' )
  const imgModal = document.getElementById( 'imgModal' )
  const textoModal = document.getElementById( 'textoModal' )
  const btnFechar = document.getElementById( 'btnFechar' )

  janelaModal.classList.remove( 'esconderJanelaModal' )
  janelaModal.classList.add( 'mostrarJanelaModal' )

  imgModal.src = img.src
  imgModal.alt = img.alt
  textoModal.innerHTML = img.alt

  btnFechar.onclick = () => {
    janelaModal.classList.add( 'esconderJanelaModal' )
    janelaModal.classList.remove( 'mostrarJanelaModal' )
  }
}