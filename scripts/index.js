const usuarios = JSON.parse(localStorage.getItem('Usuários')) || []

const perfis = document.querySelector('#perfis')

function selecionarAleatorios(array, quantidade) {

  const copia = [...array]

  const usersRandom = []

  while (usersRandom.length < quantidade && copia.length > 0) {

    const index = Math.floor(Math.random() * copia.length)

    usersRandom.push(copia.splice(index, 1)[0])
  }

  return usersRandom
}

// // Seleciona 3 usuários aleatórios
const usuariosAleatorios = selecionarAleatorios(usuarios, 3)

usuariosAleatorios.forEach((card) => {

  let id

  let img

  const profile = document.createElement('li')

  profile.classList.add('opcaoListaPerfil')

  if (card.genero == 'masculino') {

    id = 'Ele/Dele'

    img = 'img-masculino.svg'

  } else if (card.genero == 'feminino') {

    id = 'Ela/Dela'

    img = 'img-feminino.svg'

    profile.classList.add('feminino')

  } else if (card.genero == 'outro') {

    id = '?/?'

    img = 'img-semid.svg'

    profile.classList.add('outro')

  } else {

    console.log('genero não identificado')

  }

  profile.innerHTML = `
    <div class="inicioCartao">
      <img src="./images/${img}" class="foto_usuario">
      <p class="nome">${card.nome}</p> 
    </div>
    <div class="pronomes_e_idades">
      <p>${id}</p>
      <p>${card.idade} anos</p>
    </div>
    <div class="linha"></div>
    <p class="hobby">Hobby:<span class="resposta_hobby">${card.hobby}</span></p>
    <ul class="listaInformacoes">
      <li class="opcao_lista_dados_perfil">
       <p class="gostos_e_desgostos">Gosto de:</p>
       <p class="preferencias">${card.gostos}</p>
      </li>
      <li class="opcao_lista_dados_perfil">
       <p class="gostos_e_desgostos">Não gosta de:</p>
       <p class="preferencias">${card.nao_gosto}</p>
      </li>
    </ul>
    <div class="redes-sociais"></div>
      `
      const redesInfo = [
        { nome: 'Instagram', url: 'https://instagram.com/', icone: './images/instagram-icone.svg' },
        { nome: 'Facebook', url: 'https://Facebook.com/', icone: './images/facebook-icone.svg' }, // O RESTANTE DA URL SERÁ INFORMADA PELO USUÁRIO, OU SEJA, O USER DELE DA REDE SOCIAL.
        { nome: 'Outro_link', url: '', icone: './images/link-icone.svg' } // A URL SERÁ INFORMADA NO CAMPO DE CADASTRO DO USUÁRIO.
      ]

      perfis.appendChild(profile)

      const socialMedia = profile.querySelector('.redes-sociais')

      card.redes.forEach((info, index) => { // INFO = REDES SOCIAIS DO USUÁRIO
        if (info && info.trim() !== '') {
          const img = document.createElement('img')
          img.src = redesInfo[index].icone
          img.alt = redesInfo[index].nome

          const tagLink = document.createElement('a')
          redesInfo[index].url ? tagLink.href = `${redesInfo[index].url}${info}` : tagLink.href = `${info}`
          tagLink.target = '_blank'
          tagLink.textContent = info
          tagLink.appendChild(img)
          socialMedia.appendChild(tagLink)
        }
      })

})