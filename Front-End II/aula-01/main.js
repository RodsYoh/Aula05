const numbers = [9, 15, 24, 32, 70]

let res = 0;
for (let i = 0; i < numbers.length; i++){
    res += numbers[i];
    console.log(res)
}

let soma = 0;
for(numero of numbers) {
    soma += numero
    console.log(soma)
}

const welcome = 'Hello World :)'
console.log(welcome)