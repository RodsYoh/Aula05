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

    if(newName == "" || newDescription == "" || newImage == ""){
        alert('Preencha todos os campos!')
    }
    else {
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
    colecao.innerHTML += `<div class="${card.tipo}">
            <div class="cardName">
            <p>${card.nome}</p>
            </div>
            <div class="cardImage">
            <img src="${card.image}">
            </div>
            <div class="cardDescription">
            <p>${card.descricao}</p>
            </div>
        </div>`
}
} 
})