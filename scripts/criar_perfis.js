export let profiles = []

// FUNÇÃO PARA ARMAZENAR EM UM ARRAY OS DADOS ENVIADOS PELO USUÁRIO.

function data() {
  const newProfile = {
    nome: document.querySelector('#nameCreate').value,
    hobby: document.querySelector('#hobbyCreate').value,
    idade: document.querySelector('#idade').value,
    genero: document.querySelector('input[name="sexo"]:checked').value,
    gostos: [],
    nao_gosto: [],
    redes: []
  }

  profiles.push(newProfile)
}

// CRIAR UM CARTÃO COM INFORMAÇÕES ENVIADAS PELO USUÁRIO. TAIS INFORMAÇÕES VIRÃO DE UM ARRAY.

// AQUI EU PRECISO PASSAR UM FOREACH() NO ARRAY PROFILES.

// ESSA FUNÇÃO SERÁ USADA COMO BASE PARA O FOREACH()

// function createProfile(profileData) {
//   const listProfiles = document.querySelector('.perfis_pri')
//   const profile = document.createElement('li')
//   profile.classList.add('opcao_perf_pri')
//   let id
//   if (profileData.genero == 'masculino') {
//     id = 'Ele/Dele'
//   } else if (profileData.genero == 'feminino') {
//     id = 'Ela/Dela'
//   } else if (profileData.genero == 'outro') {
//     id = '?/?'
//   } else {
//     console.log('genero não identificado')
//   }
//   profile.innerHTML = `
//   <div class="cartao_inicio_pri">
//       <img src="" class="foto_usuario">
//       <p class="nome">${profileData.nome}</p> 
//      </div>
//      <div class="pronomes_e_idades">
//       <p>${id}</p>
//       <p>${profileData.idade}</p>
//      </div>
//      <div class="linha"></div>
//      <p class="hobby">Hobby:<span class="resposta_hobby">${profileData.hobby}</span></p>
//      <ul class="lista_dados_perfil">
//       <li class="opcao_lista_dados_perfil">
//        <p class="gostos_e_desgostos">Gosto de:</p>
//        <p class="preferencias">Vôlei, Futebol, ciclismo, Séries, Filmes, Academia.</p>
//       </li>
//       <li class="opcao_lista_dados_perfil">
//        <p class="gostos_e_desgostos">Não gosta de:</p>
//        <p class="preferencias">ficar em casa, Festa, gente chata</p>
//       </li>
//      </ul>
//      `
//     //  listProfiles.appendChild(profile)
//     console.log(profile)
// }
//
//
/////////////////////////////////////////////////////////////////////////////

const listProfiles = document.querySelector('.perfis_pri')

profiles.forEach((card, index) => {

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
      <p>${card.idade}</p>
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
     listProfiles.appendChild(card)
})