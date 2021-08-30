
/*function calcularPreco(quantidade){
    return quantidade * 12.50;;
}

console.log("Preço: "+calcularPreco(2));
*/
/*Micro Desafio 1 = Retorna 40 - 10 = 30;

Micro Desafio 2 = Não vai retornar nada, ou 
uma tela de erro, pois não foram dados os 
parâmetros pedidos*/


function polegadasCm(x){//recebe em polegadas
    return x*2,54;
}
console.log(polegadasCm(10))

function url(y){//recebe texto
console.log("http://www."+y+".com.br")
}
url("digitalhouse");

function grito(z){//recebe string
    console.log(z+"!");
}
grito("Meu cérebro tá fervendo");

function dogYears(a){//recebe idade do cão
return a*7;
}
console.log(dogYears(3))

function valorHora(b){//recebe salário
return b/160;
}
console.log((valorHora(1737)).toFixed(2));

function IMC(altura, peso){//recebe altura em metros e peso em kgs
    return peso/(altura*altura)
}
console.log(Math.round(IMC(1.75, 85)));
console.log(Math.round(IMC(1.78, 72)));
console.log(Math.round(IMC(1.65, 68)));
console.log(Math.round(IMC(1.90, 90)));

function caps(c){//recebe minúscula
    return c.toUpperCase();
}
console.log(caps("rato de botas"));

function tipo(d){//diz o tipo de parâmetro
return typeof(d);
}
console.log(tipo(true));

function circunferencia(raio){//dois pirraio
return 2 * Math.PI * raio;
}
console.log(Math.round(circunferencia(85)));
