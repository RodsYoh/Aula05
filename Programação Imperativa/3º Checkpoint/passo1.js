/*Construtor*/
let aluno = {

    novoAluno: function Aluno(_nome,_faltas,_notas)
    {
    this.nome = _nome
    this.faltas = _faltas
    this.notas = _notas
    //Função para adicionar falta
    this.addfaltas = function(){
        let faltas = this.faltas++;
        return tfaltas = ('O total de faltas de '+this.nome+' é '+faltas)
    },
    //Função de calcular média
    this.calcularMedia = function(){
        let total = 0;
        for(let i=0; i < this.notas.length; i++){
            total = total+this.notas[i]
        }
        const media = total/this.notas.length;
        return media.toFixed(2);
    }
}
}

module.exports = aluno;

/* Entradas: Nome, faltas, array de notas;*/
let aluno1 = new aluno.novoAluno('Rodrigo', 0, [5,6,9,5])
let aluno2 = new aluno.novoAluno('Janaína', 1, [10,9,8,7])
let aluno3 = new aluno.novoAluno('Rafael', 4, [7,8,8,8])
let aluno4 = new aluno.novoAluno('Fabiana', 3, [10,7,9,5])
let aluno5 = new aluno.novoAluno('Henrique', 1, [10,10,10,10])


/*Array dos alunos criados*/
aluno.alunosLista = [aluno1,aluno2,aluno3,aluno4,aluno5]

/* Testes de código
console.log(aluno5.calcularMedia());
console.log(aluno2.calcularMedia());
console.log(aluno3.addfaltas());
console.log(aluno3.addfaltas());
console.log(aluno3.addfaltas()); */