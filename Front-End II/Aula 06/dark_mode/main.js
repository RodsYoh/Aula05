<<<<<<< HEAD
let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

=======
let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

>>>>>>> a58a4be2a3b6b3146d65e84120e12b20ea8ab877
}