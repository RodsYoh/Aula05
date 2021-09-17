//arrow function e callbacks

var soma = (a,b) => {return a+b};
var sub = (a,b) => {return a-b};
var mult = (a,b) => {return a*b};
var div = (a,b) => {return a/b};

var calculadora = (a, b, c) => {console.log(c(a,b))};

calculadora(32,3,soma);//recebe dois números + o tipo de operação e retorna o resultado

/* setTimeout(() => {console.log("1s")}, 1000); //define uma mensagem para aparecer após X milissegundos
setTimeout(() => {console.log("2s")}, 2000);
setTimeout(() => {console.log("3s")}, 3000); */

/* for (let i = 1; i<=10; i++){
    setTimeout(() => {
        console.log("Estamos no segundo "+i);
    }, i*1000);
} */

//callback

const imprimir = texto => {
    console.log(texto);
}

const resultado = function(a, b, callback){
    const resultado = a+b;
    callback(resultado);
}

resultado(5,6,imprimir);