setTimeout(() => {
    let numeroDigitado;

    while (true) {
        numeroDigitado = Number(prompt("Digite um número"));

        if (!isNaN(numeroDigitado)) {
            break;
        }
        window.alert("Digite somente números")
    }
    console.log(`Tabuada do ${numeroDigitado}`)
    for (let i = 1; i < 11; i++) {
        console.log(`${numeroDigitado} x ${i} = ${numeroDigitado * i}`);
    }
}, 100);