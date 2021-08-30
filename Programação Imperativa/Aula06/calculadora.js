
function somar (x,y){
    return x+y;
}
function subtrair (x,y){
    return x-y;
}
function multiplicar (x,y){
    return x*y;
}
function dividir (x,y){
    return x/y;
}

console.log("------Teste de Operações / Calculadora ------");
var a = 2;
var b = 3;
var c = 40;
console.log("Os números são "+a+", "+b+",  e "+c+".")
console.log("Soma= "+somar(a,b))
console.log("Subtração= "+subtrair(a,b))
console.log("Multiplicação= "+multiplicar(a,b))
console.log("Divisão= "+(dividir(a,b)).toFixed(2))
//console.log("Divisão= "+(dividir(a,0)).toFixed(2))

function quadrado(x){
return multiplicar(x,x)
}
function mediaDeTres(x,y,z){
let soma = somar(x,y)+z;
return dividir(soma,3)
}
function porcentagem(x, y){
    let calculaPorcentagem = multiplicar(y,x)
    return dividir(calculaPorcentagem,100)
}
function geradorDePorcentagem(x,y){
    let vezes = multiplicar(x,100)
    return dividir(vezes,y)
}
console.log("O quadrado de "+a+" é "+quadrado(a))
console.log("A média dos três números é "+mediaDeTres(a,b,c));
console.log(c+"% de "+a+" é "+porcentagem(a,c))
console.log(a+" é "+geradorDePorcentagem(a,c)+"% de "+c)