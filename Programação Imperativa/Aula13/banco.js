let conta = {
    numConta: 0,
    tipo: "Poupança/Corrente",
    saldo: 0,
    titular: "Nome completo",
}

function Conta(mConta, mTipo, mSaldo, mTitular){
    this.numConta = mConta;
    this.tipo = mTipo;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let lista = [];

let conta1 = new Conta('5486273622','Corrente',27771, 'Abigael Natte');
lista.push(conta1);
let conta2 = new Conta('1183971869','Corrente', 10000, 'Lucas Feitosa de Freitas');
lista.push(conta2);
let conta3 = new Conta('9582019689',)

let banco = {
    clientes:lista,
    consultarCliente:function(nome){
        for(let i = 0; i<this.clientes.length;i++){
            let cliente = this.clientes[i];
            if(cliente.titular === nome){
                console.log(cliente);
                return cliente;
            }
        }
    },
    depositar:function(nome,valor){
        let cliente = this.consultarCliente(nome);
        cliente.saldo+= valor;
        },
    saque:function(nome,valor) {
        let cliente = this.consultarCliente(nome);
        if (valor>cliente.saldo){
            console.log("Fundos insuficientes");
        } else {
        cliente.saldo-= valor;
        console.log(cliente);
        console.log("Extração feita com sucesso");        
    }
}
}

banco.saque('Lucas Feitosa de Freitas', 1000);

