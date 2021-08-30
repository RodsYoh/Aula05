function calculoImc (altura, peso){
    let imc = peso / (altura*altura);
    if (imc<18.5){
        return "Você está abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9){
        return "Seu peso está normal"
    } else if (imc >= 25 && imc <= 29.9){
        return "Você está com sobrepeso"
    } else if (imc >= 30 && imc <= 34.9){
        return "Você está com obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9){
        return "Você está com obesidade grau II"
    } else if (imc >=40){ return "Você está com Obesidade grau III ou mórbida"}
}

console.log(calculoImc(1.75,76))