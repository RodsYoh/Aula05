let numeros = [1,2,3,4,5,6];

/* for (let i = 0; i<numeros.length; i++){
    const numero = numeros[i];
    console.log(numero);
} */

for (let numero of numeros){//for of, forma resumida da função de cima, percorre os itens do array
    console.log(numero);
}

numeros.forEach(function(elemento,indice){ // percorre o array
console.log("Elemento: "+elemento+" Indice: "+indice);
});

