const menuBurguer = document.querySelector('.menu_burguer')

// var action = true

menuBurguer.addEventListener('click', (e) => {

  e.preventDefault()

  // if (action == true) {
  const menu = document.querySelector('.links_header')
  const menuBurguer = document.querySelector('.menu_burguer')
  const transition = document.querySelector('#lado_direito')

  // menu.style.display = 'flex'

  if (menu.style.display == 'none' || menu.style.display == '') {
    menu.style.display = 'flex'
    transition.style.flexDirection = 'column'
  } else {
    menu.style.display = 'none'
    transition.style.flexDirection = 'row'
  }

  menu.classList.toggle('menu_mobile')

  menuBurguer.classList.toggle('menu_burguer_opened')

  // action = false

  // }

})