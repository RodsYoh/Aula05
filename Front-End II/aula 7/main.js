<<<<<<< HEAD
let buttonReference = document.getElementById("button");
let titleHintReference = document.getElementById("titleHint");
let titleInputReference = document.getElementById("titleInput")
let successMsgReference = document.getElementById("successMsg");

window.onload = function () {
    console.log("A página está carregada completamente.");
}

function handleHint (){
    titleHintReference.classList.toggle('show');
}

buttonReference.addEventListener('click', function(event){
    mostrarMensagem();
    event.preventDefault();
});

titleHintReference.addEventListener('keydown', function(event){
    titleHintReference.innerHTML = `<h1>${titleHintReferences}</h1>` //????????
}
)

titleInputReference.addEventListener('mouseover', handleHint);

// buttonReference.onclick = function (){
//     mostrarMensagem();
// }

function mostrarMensagem(){
    successMsgReference.classList.toggle('show');
    //alert("Olá! Eu sou uma mensagem.");
}

//https://docs.google.com/document/d/1b6zW2DQT5PSpwgATbqWq75332Os_EDCjTmLOU4zMJ1w/edit#heading=h.7g7xzfiv6u36

=======
<<<<<<< HEAD
let buttonReference = document.getElementById("button");
let titleHintReference = document.getElementById("titleHint");
let titleInputReference = document.getElementById("titleInput")
let successMsgReference = document.getElementById("successMsg");

window.onload = function () {
    console.log("A página está carregada completamente.");
}

function handleHint (){
    titleHintReference.classList.toggle('show');
}

buttonReference.addEventListener('click', function(event){
    mostrarMensagem();
    event.preventDefault();
});

titleHintReference.addEventListener('keydown', function(event){
    titleHintReference.innerHTML = `<h1>${titleHintReferences}</h1>` //????????
}
)

titleInputReference.addEventListener('mouseover', handleHint);

// buttonReference.onclick = function (){
//     mostrarMensagem();
// }

function mostrarMensagem(){
    successMsgReference.classList.toggle('show');
    //alert("Olá! Eu sou uma mensagem.");
}

//https://docs.google.com/document/d/1b6zW2DQT5PSpwgATbqWq75332Os_EDCjTmLOU4zMJ1w/edit#heading=h.7g7xzfiv6u36

=======
let buttonReference = document.getElementById("button");
let titleHintReference = document.getElementById("titleHint");
let titleInputReference = document.getElementById("titleInput")
let successMsgReference = document.getElementById("successMsg");

window.onload = function () {
    console.log("A página está carregada completamente.");
}

function handleHint (){
    titleHintReference.classList.toggle('show');
}

buttonReference.addEventListener('click', function(event){
    mostrarMensagem();
    event.preventDefault();
});

titleHintReference.addEventListener('keydown', function(event){
    titleHintReference.innerHTML = `<h1>${titleHintReferences}</h1>` //????????
}
)

titleInputReference.addEventListener('mouseover', handleHint);

// buttonReference.onclick = function (){
//     mostrarMensagem();
// }

function mostrarMensagem(){
    successMsgReference.classList.toggle('show');
    //alert("Olá! Eu sou uma mensagem.");
}

//https://docs.google.com/document/d/1b6zW2DQT5PSpwgATbqWq75332Os_EDCjTmLOU4zMJ1w/edit#heading=h.7g7xzfiv6u36

>>>>>>> a58a4be2a3b6b3146d65e84120e12b20ea8ab877
>>>>>>> 9172f26830b2dc75aee888a06b918ad41cba1418
//https://www.figma.com/file/DKPz10CYUNqcYt2GPs0dpx/Untitled?node-id=0%3A1