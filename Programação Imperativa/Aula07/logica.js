/*
.: Ex1. O que cada expressão retorna? :.
Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
!true = false
!false = true
!!false = false
!!true = true
!1 = 0
!!1 = 1
!0 = 1
!!0 = 0
!!"" = false
let x = 5 ;
let y = 9;
x < 10 && x!==5  =  false
x>9 || x===5  =  true
!(x===y)  =  true

.: Ex2. O que cada expressão retorna? :.
Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

let x=10
let y ="a"
y==="b" || x >= 10  =  true

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)  =  false

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)  =  false
*/
