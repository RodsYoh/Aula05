// let escolhaUsuario = parseInt(prompt('1 - Papel, 2 - tesoura ou 3 - pedra?'));

// let escolhaBot = parseInt(Math.random()*3+1);

// console.log(escolhaBot);

// if (escolhaUsuario === 3){
//     if(escolhaBot === 2){
//         alert('O usuário ganhou!')
//     } else {alert('Você perdeu!')}
// }



/*const numbers = [1, 2, 3, 4, 5, 6, 5, 3, 8]

for(const number of numbers){ //Percorrer um array
    console.log(number)
}

let user = {
    name: 'João Paulo',
    age: 32,
    birthDate: '18/05/1994'
}

for(let detail in user){//Percorrer um objeto
    console.log(detail+': '+user[detail])
}*/

let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
let escolhaBot = parseInt( Math.random()*3+1 )

if(escolhaUsuario === 1) {

    if(escolhaBot === 1) {

        alert('empatou')

    }

    if(escolhaBot === 2) {

        alert('o bot ganhou')

    }

    if(escolhaBot === 3) {

        alert('o usuário ganhou')

    }

}

if(escolhaUsuario === 2) {

    if(escolhaBot === 1) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 2) {

        alert('empatou')

    }

    if(escolhaBot === 3) {

        alert('o bot ganhou')

    }

}

if(escolhaUsuario === 3) {

    if(escolhaBot === 1) {

        alert('o bot ganhou')

    }

    if(escolhaBot === 2) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 3) {

        alert('o usuário ganhou')

    }

}

console.log('Jogada do Usuário '+escolhaUsuario)
console.log('Jogada do Bot '+escolhaBot)

//Vitória = 2 vitórias e acaba a partida.