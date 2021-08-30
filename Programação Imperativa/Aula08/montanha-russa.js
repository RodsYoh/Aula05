/*a)	A pessoa deve medir mais de 1.40m e menos de 2 metros.
b)	Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c)	Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada*/

function podeSubir(altura,acompanhante){
    if (altura>=1.40 && altura<2.00){
        console.log("Pode subir.")
    } else if (altura>1.20&&altura<1.40&&acompanhante){
        console.log("Acesso autorizado somente com acompanhante")
    }
    else
    {console.log("Acesso negado.")}
}

podeSubir(1.3,false)

/*function podeSubir (altura, acompanhada){
    let temAcompanhante = acompanhada === "sim" ? "Acesso autorizado e Acompanhante OK" : "Acesso negado!";
    return altura < 1.2 ? "Acesso negado!" : altura < 1.4 ? "Acesso autorizado, somente com acompanhante!" && temAcompanhante : altura >= 1.4 && altura < 2 ? "Acesso autorizado" : "Excede a altura permitida!";
}
console.log(podeSubir(1.3, "sim"));*/
