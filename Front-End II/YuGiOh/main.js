<<<<<<< HEAD
//let name1 = document.querySelector('#newName')
//let description = document.querySelector('#newDescription')
//let image = document.querySelector('#newImage')
//let type = document.querySelector('.cardType')

botao.addEventListener('click', function(event){
    let newName = document.querySelector('#newName').value
    let newDescription = document.querySelector('#newDescription').value
    let newImage = document.querySelector('#newImage').value
    let cardType = document.querySelector('input[name=cardType]:checked').value
    let cards = []

    cards.push(
        {
            nome: newName,
            descricao: newDescription,
            image: newImage,
            tipo: cardType
        }
    )
    event.preventDefault()
    
    for(let card of cards) {
    colecao.innerHTML += `
        <div class="${card.tipo}">
            <div class="cardName">
            <p>${card.nome}</p>
            </div>
            <div class="cardImage">
            <img src="${card.image}">
            </div>
            <div class="cardDescription">
            <p>${card.descricao}</p>
            </div>
        </div>
    `
}
})


=======
<<<<<<< HEAD
//let name1 = document.querySelector('#newName')
//let description = document.querySelector('#newDescription')
//let image = document.querySelector('#newImage')
//let type = document.querySelector('.cardType')

botao.addEventListener('click', function(event){
    let newName = document.querySelector('#newName').value
    let newDescription = document.querySelector('#newDescription').value
    let newImage = document.querySelector('#newImage').value
    let cardType = document.querySelector('input[name=cardType]:checked').value
    let cards = []

    cards.push(
        {
            nome: newName,
            descricao: newDescription,
            image: newImage,
            tipo: cardType
        }
    )
    event.preventDefault()
    
    for(let card of cards) {
    colecao.innerHTML += `
        <div class="${card.tipo}">
            <div class="cardName">
            <p>${card.nome}</p>
            </div>
            <div class="cardImage">
            <img src="${card.image}">
            </div>
            <div class="cardDescription">
            <p>${card.descricao}</p>
            </div>
        </div>
    `
}
})


=======
//let name1 = document.querySelector('#newName')
//let description = document.querySelector('#newDescription')
//let image = document.querySelector('#newImage')
//let type = document.querySelector('.cardType')

botao.addEventListener('click', function(event){
    let newName = document.querySelector('#newName').value
    let newDescription = document.querySelector('#newDescription').value
    let newImage = document.querySelector('#newImage').value
    let cardType = document.querySelector('input[name=cardType]:checked').value
    let cards = []

    cards.push(
        {
            nome: newName,
            descricao: newDescription,
            image: newImage,
            tipo: cardType
        }
    )
    event.preventDefault()
    
    for(let card of cards) {
    colecao.innerHTML += `
        <div class="${card.tipo}">
            <div class="cardName">
            <p>${card.nome}</p>
            </div>
            <div class="cardImage">
            <img src="${card.image}">
            </div>
            <div class="cardDescription">
            <p>${card.descricao}</p>
            </div>
        </div>
    `
}
})


>>>>>>> a58a4be2a3b6b3146d65e84120e12b20ea8ab877
>>>>>>> 9172f26830b2dc75aee888a06b918ad41cba1418
