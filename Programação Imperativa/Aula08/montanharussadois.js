function podeSubir(altura, acompanhante){
    
    if(altura>=1.40 && altura<2){
        return "Acesso autorizado" ;
    }
    else if (altura<1.40 && acompanhante=='sim'){
        return "Acesso autorizado somente com acompanhante";
    }
    else if (altura<1.40 && acompanhante=='não'){
        return "Acesso negado.";
    }
    else if (altura<1.2){
        return "Acesso negado.";
    }
    else if (altura>=2){
        return "Acesso negado.";
    }
    }
    console.log(podeSubir(1.3,'sim'))
    