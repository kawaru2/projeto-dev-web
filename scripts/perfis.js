const listProfiles = document.querySelector('.perfis_pri')

let dataBaseProfiles = JSON.parse(localStorage.getItem('Usuários'))

if (!Array.isArray(dataBaseProfiles)) {
  dataBaseProfiles = []
}

dataBaseProfiles.forEach((card) => {

  let id

  const profile = document.createElement('li')

  profile.classList.add('opcao_perf_pri')

  if (card.genero == 'masculino') {

    id = 'Ele/Dele'

  } else if (card.genero == 'feminino') {

    id = 'Ela/Dela'

  } else if (card.genero == 'outro') {

    id = '?/?'

  } else {

    console.log('genero não identificado')

  }

  profile.innerHTML = `
  <div class="cartao_inicio_pri">
      <img src="" class="foto_usuario">
      <p class="nome">${card.nome}</p> 
     </div>
     <div class="pronomes_e_idades">
      <p>${id}</p>
      <p>${card.idade} anos</p>
     </div>
     <div class="linha"></div>
     <p class="hobby">Hobby:<span class="resposta_hobby">${card.hobby}</span></p>
     <ul class="lista_dados_perfil">
      <li class="opcao_lista_dados_perfil">
       <p class="gostos_e_desgostos">Gosto de:</p>
       <p class="preferencias">Vôlei, Futebol, ciclismo, Séries, Filmes, Academia.</p>
      </li>
      <li class="opcao_lista_dados_perfil">
       <p class="gostos_e_desgostos">Não gosta de:</p>
       <p class="preferencias">ficar em casa, Festa, gente chata</p>
      </li>
     </ul>
     `
     listProfiles.appendChild(profile)
})