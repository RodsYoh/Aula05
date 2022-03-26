let botaoLogarReferencia = document.querySelector('#botao')
let paragrafoReferencia = document.querySelector('.paragrafos')
let textos

//Função para definir o innerHTML
function forTextos(textos){
    paragrafoReferencia.innerHTML = ''

for (t of textos){
    paragrafoReferencia.innerHTML += t
}}

//Função para checar se já tem algo salvo no localStorage
if (localStorage.getItem('paragrafos')){
    textos = JSON.parse(localStorage.getItem('paragrafos'))
    forTextos(textos)
    }
 else {
  textos = []  
}

//Função para adicionar novos comentários ao locaStorage e HTML
botaoLogarReferencia.addEventListener('click', function(event) {
    event.preventDefault()
    let textoReferencia = document.querySelector('#texto')

    textos.push(`<p>${textoReferencia.value}</p>`)

    //Salva no localStorage o valor convertido para JSON do objeto "usuarioDados"
    localStorage.setItem('paragrafos', JSON.stringify(textos))
    
    forTextos(textos)
    }
)
