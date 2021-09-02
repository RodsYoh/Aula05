var peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
var peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally"]

const peliculasScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const peliculas2Scores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(peliculasScores, peliculas2Scores) {
    let comparacaoFilmes =[];
    for (k=0; k<peliculasScores.length; k++){
    comparacaoFilmes[k] = peliculasScores[k] === peliculas2Scores[k];
}
    console.log(comparacaoFilmes);
}
compararCalificaciones(peliculasScores, peliculas2Scores)
for (let i = 0; i<peliculas.length; i++){
    peliculas[i] = peliculas[i].toUpperCase();
    console.log(peliculas[i].toUpperCase());
}

function passagemDeElementos(peliculas,peliculas2){
    for (let j = 0; j<peliculas2.length; j++) { 
    peliculas.push(peliculas2[j].toUpperCase());
  }  console.log (peliculas);
}
passagemDeElementos(peliculas,peliculas2)

