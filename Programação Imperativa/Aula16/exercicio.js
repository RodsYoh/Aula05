/* Exercício 1
function fb(a,b){
    for (let i=1 ; i<=100 ;i++){
        if (a % i == 0 && 2 % i ==0){
            console.log("FizzBuzz");
        } else if (b % i == 0){ console.log ("Buzz")}
        else if (a % i == 0){console.log("Fizz")}
        else console.log(i))
    }
}
 */

/* var fB = (a,b,p1,p2) =>{
    for (let i=1 ; i<=100 ; i++){
        if (a % i == 0 && b % i == 0){
            console.log(p1+p2)

            } else if (b % i == 0){
                console.log(p2)

                } else if (a % i == 0){
                    console.log(p1)

                }else {console.log(i)}
    }
}

fB(150, 50, 'Jayce','Peixe') */

/* Exercício 2 
function factorial(n){
  var res = 1;
  for(var i=n; i>=1; i--){
    res = res * i;
  }
  return res;
}

function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
} */

function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
}
