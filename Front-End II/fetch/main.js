let cepRef = document.querySelector('#cep')
let cidadeRef = document.querySelector('#cidade')
let logradouroRef = document.querySelector('#logradouro')
let botaoRef = document.querySelector('#botao')

botaoRef.addEventListener('click', event => {
    event.preventDefault()

    fetch(`https://viacep.com.br/ws/${cepRef.value}/json/`)
        .then(
            response => {
                response.json()
                    .then(
                        success => {
                            cidadeRef.value = success.localidade
                            logradouroRef.value = success.logradouro
                        }
                    )
            }
        )
})