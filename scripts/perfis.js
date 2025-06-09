const listProfiles = document.querySelector('.perfis_pri')

let dataBaseProfiles = JSON.parse(localStorage.getItem('Usuários'))

// SE O ARRAY ESTIVER VAZIO, VISANDO EVITAR O RETORNO DE UM ERRO.

if (!Array.isArray(dataBaseProfiles)) {
  dataBaseProfiles = []
}

dataBaseProfiles.forEach((card) => {

  let id

  let img

  const profile = document.createElement('li')

  profile.classList.add('opcao_perf_pri')

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

  // TRABALHAR COM AS STRINGS PARA QUE EU SEPARE OS GOSTOS POR UMA VIRGULA CASO NÃO TENHA. SERVE PARA OS NÃO GOSTOS.

  // O DATABASEPROFILES ME RETORNA TODOS OS PERFIS DO ARRAY. JÁ O CARD DO FOREACH() ME RETORNA SOMENTE O ITEM DO ARRAY ATUAL.

  profile.innerHTML = `
    <div class="cartao_inicio_pri">
      <img src="../images/${img}" class="foto_usuario">
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
        { nome: 'Instagram', url: 'https://instagram.com/', icone: '../images/instagram-icone.svg' },
        { nome: 'Facebook', url: 'https://Facebook.com/', icone: '../images/facebook-icone.svg' }, // O RESTANTE DA URL SERÁ INFORMADA PELO USUÁRIO, OU SEJA, O USER DELE DA REDE SOCIAL.
        { nome: 'Outro_link', url: '', icone: '../images/link-icone.svg' } // A URL SERÁ INFORMADA NO CAMPO DE CADASTRO DO USUÁRIO.
      ]

      listProfiles.appendChild(profile)

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

/*

  PRECISO REVISAR ESSE CÓDIGO INFORMADO PELO COPILOT.

  A FUNÇÃO DO CÓDIGO É ALTERAR O INNERHTML ACIMA PARA QUE ELE NÃO ENVIE OS LINKS CASO O USUÁRIO NÃO INFORME SUAS REDES, EVITANDO ENVIAR PARA O PERFIL.

  OBS: DEVE SER APLICADO APÓS O INNERHTML E ANTES DO APPENDCHILD

  APAGAR:
<div Id="Redes-sociais">
  <img src="" alt=""><a href="Https://www.Instagram.com/${card.redes[0]}" target="_blank">@${card.redes[0]}</a>
  <img src="" alt=""><a href="Facebook.com/${card.redes[1]}">Facebook.com/${card.redes[1]}</a>
  <img src="" alt=""><a href="${card.redes[2]}">${card.redes[2]}</a>
</div>

ADICIONAR:

const redesInfo = [
  { nome: 'Instagram', baseUrl: 'https://www.instagram.com/', icon: 'instagram-icon.png' },
  { nome: 'Facebook', baseUrl: 'https://www.facebook.com/', icon: 'facebook-icon.png' },
  { nome: 'Outro', baseUrl: '', icon: 'link-icon.png' }
];

redes.forEach((valor, index) => {
  if (valor && valor.trim() !== '') {
    const img = document.createElement('img');
    img.src = redesInfo[index].icon;
    img.alt = redesInfo[index].nome;

    const a = document.createElement('a');
    const isFullLink = valor.startsWith('http');
    a.href = isFullLink ? valor : redesInfo[index].baseUrl + valor;
    a.target = '_blank';
    a.textContent = isFullLink ? valor : `@${valor}`;

    redesContainer.appendChild(img);
    redesContainer.appendChild(a);
  }
});

*/