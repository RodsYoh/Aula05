function Pessoa(_altura, _sexo, _nome){ // função construtora
    this.altura = _altura;
    this.sexo = _sexo;
    this.nome = _nome;
}

const pessoa1 = new Pessoa(1.80,'M','Pessoa M 1');
const pessoa2 = new Pessoa(1.70,'F','Pessoa F 1');
const pessoa3 = new Pessoa(1.60,'M', 'Pessoa M 2');
const pessoa4 = new Pessoa(1.93,'M', 'Pessoa M 3');
const pessoa5 = new Pessoa(1.75,'F', 'Pessoa F 2');

const pessoas = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5];


module.exports = {
    pessoas:pessoas,
    maiorEMenorAltura:function(){
        let pessoasOrdenadas = this.pessoas.sort(function(primeiraPessoa,segundaPessoa){
            return primeiraPessoa.altura - segundaPessoa.altura;
        });
        console.log(pessoasOrdenadas);
    }
}
    