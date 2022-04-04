<<<<<<< HEAD
let nomeUsuarioReferencia = document.querySelector('#nomeUsuario')
let idadeUsuarioReferencia = document.querySelector('#idadeUsuario')

// Obtem os dados salvo em JSON do usuario salvo no localStorage e converte o JSON para um Objeto do próprio JavaScript
let usuarioDados = JSON.parse( localStorage.getItem('usuario') )

nomeUsuarioReferencia.innerHTML = usuarioDados.nome
=======
<<<<<<< HEAD
let nomeUsuarioReferencia = document.querySelector('#nomeUsuario')
let idadeUsuarioReferencia = document.querySelector('#idadeUsuario')

// Obtem os dados salvo em JSON do usuario salvo no localStorage e converte o JSON para um Objeto do próprio JavaScript
let usuarioDados = JSON.parse( localStorage.getItem('usuario') )

nomeUsuarioReferencia.innerHTML = usuarioDados.nome
=======
let nomeUsuarioReferencia = document.querySelector('#nomeUsuario')
let idadeUsuarioReferencia = document.querySelector('#idadeUsuario')

// Obtem os dados salvo em JSON do usuario salvo no localStorage e converte o JSON para um Objeto do próprio JavaScript
let usuarioDados = JSON.parse( localStorage.getItem('usuario') )

nomeUsuarioReferencia.innerHTML = usuarioDados.nome
>>>>>>> a58a4be2a3b6b3146d65e84120e12b20ea8ab877
>>>>>>> b10bb81d2be7fde63227932dbb8b33b2142d6dfa
idadeUsuarioReferencia.innerHTML = usuarioDados.idade