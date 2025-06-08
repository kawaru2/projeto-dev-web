const links = document.querySelectorAll('.lista_perguntas_items')

const renderizarAjuda = document.querySelector('#lista_perguntas')

const sectionAjuda = document.createElement('div')

renderizarAjuda.appendChild(sectionAjuda)

sectionAjuda.style.display = 'none'

links.forEach((link, index) => {
  link.addEventListener('click', () => {

    sectionAjuda.innerHTML = ''

    const ajuda = document.createElement('p')

    ajuda.classList.add('ajuda')

    if (index === 0) {
      ajuda.innerHTML = 'Você pode acessar a página perfis <a href="./perfis.html">clicando aqui</a> e escolha a opção "remover ou editar perfil". Insira sua senha e remova seu perfil.'

    } else if (index === 1) {
      
      ajuda.innerHTML = 'Você pode acessar a página perfis <a href="./perfis.html">clicando aqui</a> e escolha a opção "remover ou editar perfil". Insira sua senha e altere seu perfil.'

    } else if (index === 2) {

      ajuda.innerHTML = 'Nos envie um email solicitando a sua senha informando o seu nome e em até 48 horas o setor de ajuda entrará em contato com você.'

    }

    if (ajuda.innerHTML.trim() !== '') {

      sectionAjuda.appendChild(ajuda)

      sectionAjuda.style.display = 'block'

    } else {

      sectionAjuda.style.display = 'none'

    }
    
  })
})