// FUNÇÃO PARA ARMAZENAR EM UM ARRAY OS DADOS ENVIADOS PELO USUÁRIO.
// IMPORTANTE QUE A VARIAVEL CONTENDO O ARRAY DO LOCALSTORAGE FIQUE FORA DA FUNÇÃO PARA QUE ELA NÃO SEJA REESCRITA E ASSIM PERDENDO OS DADOS ANTIGOS.

let usuarios = JSON.parse(localStorage.getItem('Usuários')) || []

function data() { // ESSA FUNÇÃO FICOU MUITO GRANDE, ELA PODE SER QUEBRADA EM VÁRIAS PARTES E ESSAS PARTES PODEM SER CHAMADAS QUANDO A FUNÇÃO PRINCIPAL FOR CHAMADA NO DOM.

  // O IDEAL ERA TER CRIADO VARIÁVEIS PARA CADA CAMPO DO OBJETO.
  
  const newProfile = {
    nome: document.querySelector('#nameCreate').value.trim(),
    hobby: document.querySelector('#hobbyCreate').value.trim(),
    idade: document.querySelector('#idade').value,
    genero: document.querySelector('input[name="sexo"]:checked').value,
    gostos: document.querySelector('#gosto').value.trim(),
    nao_gosto: document.querySelector('#nao_gosto').value.trim(),
    redes: [
      document.querySelector('#insta').value,
      
      document.querySelector('#facebook').value,
      
      document.querySelector('#outra').value],
    
    senha: document.querySelector('#id').value
  }

  // FUTURAMENTE EU PRECISO SUBSTITUIR ESSAS CONDICIONAIS PELA CONDICIONAL SWITCH PARA EVITAR MUITOS IF.

  // CONDICIONAIS PARA ENTREGAR AS INFORMAÇÕES CORRETAS E AS INFORMAÇÕES OBRIGATÓRIAS PARA A CRIAÇÃO DO PERFIL.

  if (newProfile.nome === '' || /\d/.test(newProfile.nome)) { // O /\d/ É UMA EXPRESSÃO REGULAR PARA VALIDAR SE A VARIÁVEL É UM NÚMERO, CASO SEJA, O CÓDIGO PARA A EXECUÇÃO.

    alert('Números não são permitidos no campo "Nome". Por favor, reescreva seu nome.')

    return

  } else if (newProfile === '' || /\d/.test(newProfile.hobby)) {

    alert('Números não são permitidos no campo "Hobby". Por favor, reescreva qual o seu hobby.')

    return

  } else if (newProfile.nome.length < 3) {

    alert('Nome inválido, tente colocar o nome e sobrenome.')

    document.querySelector('#nameCreate').value = ''

    document.querySelector('#nameCreate').focus()

    return

  } else if (newProfile.idade.length === 0 || newProfile.idade === 0 || newProfile.idade < 15) {

    alert('Idade inválida ou inexistente. Verifique se você está informando a sua idade ou você está informando uma idade muito abaixo do permitido.')

    document.querySelector('#idade').value = ''

    document.querySelector('#idade').focus()

    return

  }

  if (newProfile.hobby.length === 0 || newProfile.length <= 4 ) {

    alert('É necessário informar pelo menos o seu hobby.')

    return

  }

  if (newProfile.gostos.length === 0) {
    newProfile.gostos = 'Sem informações'
  }

  if (newProfile.nao_gosto.length === 0) {
    newProfile.nao_gosto = 'Sem informações'
  }

  // O ID SERÁ PARA COMPROVAR QUE A PESSOA ESTÁ MEXENDO NO PERFIL DELA.

  const yourId = document.querySelector('#id').value

  const confirmacaoSenha = document.querySelector('#confirmacaoId').value

  // TRATAMENTO DAS SENHAS

  if (yourId.length === 0 || yourId.length < 4) {

    alert('É necessário que você digite uma senha de pelo menos 4 digitos.')

    return

  } else if (yourId !== confirmacaoSenha) {

    alert('ERRO! Sua confirmação de senha está incorreta, digite novamente.')

    return

  }

  // MANIPULAÇÃO DAS STRINGS DE GOSTOS E NÃO GOSTOS

  newProfile.gostos = newProfile.gostos
  .split(/[, ]+/)
  .filter(item => item !== '')
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join('; ')

  newProfile.nao_gosto = newProfile.nao_gosto
  .split(/[, ]+/)
  .filter(item => item !== '')
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join('; ')

  usuarios.push(newProfile)

  localStorage.setItem('Usuários', JSON.stringify(usuarios))

  const respostaPerfilCriado = document.querySelector('#dados_perfil')

  let searchMsgFinally = document.querySelector('.perfil_criado')

  if (searchMsgFinally) {

    searchMsgFinally.textContent = `Olá ${newProfile.nome}, seu perfil foi criado com sucesso. Volte para a página de perfil para visualizá-lo. Seu ID é ${yourId}.`

  } else {

    let msgFinally = document.createElement('p')

    msgFinally.classList.add('perfil_criado')

    msgFinally.textContent = `Olá ${newProfile.nome}, seu perfil foi criado com sucesso. Você será redirecionado para a página de perfil automaticamente. Seu ID é ${yourId}.`

    respostaPerfilCriado.appendChild(msgFinally)

    msgFinally.focus() // NÃO SEI SE VAI DAR CERTO MAS A IDEIA É QUE O USUÁRIO FOQUE NESSA ÁREA POR CONTA DE SUA SENHA.

  }

  alert('Não esqueça de sua senha. É importante para editar seu perfil.')

  setTimeout(() => {
    window.location.href = './perfis.html'
  }, 4000)

}