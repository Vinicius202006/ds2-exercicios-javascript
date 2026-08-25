        let numeroDigitado;

        while(true) {
         numeroDigitado = Number(prompt("Digite um número"));
        
        if (!isNaN(numeroDigitado)){
            break;
        }
        window.alert("Digite somente números")
        }
        
        for(let i = 1; i < 11; i++) {
            console.log(`${numeroDigitado} x ${i} = ${numeroDigitado*i}`);
        }