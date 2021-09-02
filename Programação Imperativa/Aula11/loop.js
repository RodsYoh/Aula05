/*for, while, do while */

let arr = [0,1,2,3,4,5,6,7];

for(let i=0; i<5; i++){
    console.log("Olá mundo! " + i)
}

//Precisa da variável antes
let contador =0;
while (contador<5){
    console.log("Olá mundo $" +contador);
    contador++;
}

contador=0;
//Executa pelo menos uma
do {
    console.log("Olá mundo "+contador);
    contador++;
} while (contador < 8)

/*let array = (0,1,2,3,4,5,6,7,8,9,10);

for (let i = 1; i <= 10; i=i +2){
    if (i%2!=0){
    console.log(i);
}
}*/

for (let i =1; i<10; i++){
    console.log(`Tabuada de ${i} \n`);
    // \n é quebra de linha
    for (let j = 1; j<10; j++){
        console.log(`${i}x${j}=${i*j}`);
    }
    console.log(`\n`)
}