const menuBurguer = document.querySelector('.menu_burguer')

menuBurguer.addEventListener('click', () => {

  var menu = document.querySelector('.links_header')
  const menuBurguer = document.querySelector('.menu_burguer')
  const transition = document.querySelector('.cabecalho')
  var localResult = document.querySelector('.conteudo')

  if (menu.style.display == 'none' || menu.style.display == '') {

    localResult.insertBefore(menu, localResult.firstChild)
    menu.style.display = 'flex'
    menu.classList.toggle('new_menu')

  } else {
    menu.style.display = 'none'
    menu.classList.toggle('new_menu')

  }

  menuBurguer.classList.toggle('menu_burguer_opened')

})