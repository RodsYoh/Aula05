let importar = require('./passo1')

let curso = {
    nome: 'Certified Tech Developer',
    aprovacao: 7,
    maxFaltas: 4,
    listaEstudantes: importar.alunosLista, /*Alunos do primeiro array*/
    /*Função para indicar aprovação individual*/
    notaFinal: function(i){
                let aprovacao=false;
                if ((importar.alunosLista[i].calcularMedia() >= curso.aprovacao && importar.alunosLista[i].faltas < curso.maxFaltas) || (importar.alunosLista[i].calcularMedia() >= (1.1*curso.aprovacao) && importar.alunosLista[i].faltas == curso.maxFaltas))
                {
                    aprovacao = true;
                } console.log('|'+importar.alunosLista[i].nome +': '+aprovacao+'|');
    },
    /*Função para indicar aprovação da turma*/
    notaCompleta: function(){
        for(let i=0; i < this.listaEstudantes.length; i++){
            this.notaFinal(i);
    }
}
}


/*Função para adicionar novo aluno*/
function Aluno(indice,nome_,faltas_,notas_){
        nome = nome_,
        faltas = faltas_,
        notas = notas_,
        alunonovo = indice={
            nome: nome_,
            faltas: faltas_,
            notas: notas_,
        addfaltas: function(){
                let faltas = this.faltas++;
                return tfaltas = ('O total de faltas de '+this.nome+' é '+faltas)
            },
        calcularMedia: function(notas){
                let total = 0;
                for(let i=0; i<this.notas.length; i++){
                    total = total+this.notas[i];
                }
                return media = ('A média de '+this.nome+' é '+total/this.notas.length);
            },
        }
        {
            curso.listaEstudantes.push(alunonovo);
        }
    } 
//Adicionando novo aluno  
//Aluno('aluno6','Gabriel',3,[7,8,9,7]);

/*Conferindo se entrou na lista*/
//console.log(curso.listaEstudantes[5]);

/*Testando aprovação individual*/

/*curso.notaFinal(0),
curso.notaFinal(1),
curso.notaFinal(2),
curso.notaFinal(3),
curso.notaFinal(4)*/

/*Testando aprovação da turma*/
curso.notaCompleta();


