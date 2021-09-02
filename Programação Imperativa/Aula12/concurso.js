const alice = [ 23, 82, 46 ]
const bob = [ 45, 8, 32]
var alicePontos=0;
var bobPontos=0;
var vencedor = "";

function encontrarGanhador(a, b) {
    for (i=0; i<a.length; i++){
        if (a[i]>b[i]){alicePontos++} else if (a[i]<b[i]) {bobPontos++}
        else if (a[i]=b[i]){continue};
    }
if (alicePontos>bobPontos){
 vencedor = "Alice é o vencedor"} else {vencedor = "Bob é o vencedor"}
 console.log(vencedor);
}

encontrarGanhador(alice, bob);
