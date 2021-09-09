let conta = {
    numConta: 0,
    tipo: "Poupança/Corrente",
    saldo: "em R$",
    titular: "Nome completo",
}

function Conta(numConta, tipo, saldo, titular){
    this.numConta = numConta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let contaUm = new Conta('5486273622','Corrente','R$ 27.771,00', 'Abigael Natte');
let contaDois = new Conta('1183971869','Corrente','R$ 10.000,00', 'Lucas Feitosa de Freitas');
let contaTres = new Conta('9582019689',)


console.log(contaUm);
console.log(contaDois);

