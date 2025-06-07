const btnEdit = document.querySelector('#btn-edit')

const btnDelete = document.querySelector('#btn-delete')

const usuarios = JSON.parse(localStorage.getItem('Usuários')) || []

btnEdit.addEventListener('click', () => {
  const editProfile = {
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
    
    senha: document.querySelector('#id').value.trim()
  }

  // ESSA VALIDAÇÃO SERÁ UMA FUNÇÃO FUTURAMENTE, FEITA PARA UMA PÁGINA DE LOGIN DO USUÁRIO.

  const userAtual = usuarios.find(user => user.senha === editProfile.senha) // SERÁ USADO SEMPRE QUE EU QUISER FAZER MODIFICAÇÃO NO USUÁRIO QUE ENTROU COM A SENHA.

  const indexUser = usuarios.findIndex(user => user.senha === editProfile.senha) // RETORNA O INDEX, OU SEJA, A POSIÇÃO DO ITEM NA MINHA LISTA.

  // SE A SENHA DO USUÁRIO FOI ENCONTRADA OU NÃO NO LOCALSTORAGE (MÉTODO DE PROCURA NO LOCALSTORAGE).

  if (!userAtual) {
    alert('Usuário não encontrado')
    return
  }

  Object.keys(userAtual).forEach(key => {
    const editUser = editProfile[key]

    // TRATAMENTO ESPECIAL PARA AS REDES SOCIAIS DO USUÁRIO QUANDO FOREM MODIFICADAS E ASSIM EVITANDO DE SEREM APAGADAS QUANDO O USUÁRIO DEIXAR O CAMPO EM BRANCO.
    if ( key === 'redes') {

      const redesAtuais = userAtual.redes

      const redesEdit = editUser.map((rede, i) => {

        return rede && rede.trim() !== '' ? rede : redesAtuais[i]

      })
    

    // SÓ ATUALIZA SE HOUVER MUDANÇAS
    const redesChange = redesEdit.some((r, i) => r !== redesAtuais[i])

    if (redesChange) {
      userAtual.redes = redesEdit
    }

    return
  }

    if (key === 'senha') return // O RETURN DENTRO DE UM FOREACH() NÃO ENCERRA A FUNÇÃO, ELE SÓ PULA PARA A PRÓXIMA ITERAÇÃO

    if (editUser !== null && editUser !== undefined && !(typeof editUser === 'string' && editUser.trim() === '') && editUser !== userAtual[key]) { 
      // A ÚLTIMA CONDICIONAL É PARA EVITAR DE FAZER A ITERAÇÃO CASO SEJA O MESMO VALOR (DADO INFORMADO NO CAMPO) DE ANTES.

      userAtual[key] = editUser

    }
  })

  localStorage.setItem('Usuários', JSON.stringify(usuarios))

  alert('Perfil atualizado com sucesso!')

  window.location.href = '/pages/perfis.html'

})

btnDelete.addEventListener('click', () => {

  const editProfile = {
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
    
    senha: document.querySelector('#id').value.trim()
  }

  const indexUser = usuarios.findIndex(user => user.senha === editProfile.senha)

  if (indexUser !== -1) { // -1 NÃO EXISTE NA POSIÇÃO DE UM ARRAY, OU SEJA, A CONDICIONAL ESTÁ VALIDANDO DE QUE A POSIÇÃO SEJA VÁLIDA NO ARRAY.

    usuarios.splice(indexUser, 1) // 1 SIGNIFICA QUANTAS ITENS SERÃO APAGADAS A PARTIR DO INDEX SELECIONADO.

    localStorage.setItem('Usuários', JSON.stringify(usuarios))

    alert('Seu perfil foi apagado com sucesso!')

    window.location.href = '/pages/perfis.html'

  }
})