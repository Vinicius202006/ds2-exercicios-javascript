function somar(numero1, numero2) {
    return numero1 + numero2
};

var soma = somar(2, 3);

console.log(`Soma: ${soma}`);

function calculaMedia(nota1, nota2) {
    if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0) {
        return (nota1 + nota2) / 2
    } else {
        console.log("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
    }

};

var media = calculaMedia(10, 10);

console.log(`Média: ${media}`);

function classificaMedia(cMedia) {

    if (cMedia >= 7) {
        console.log("Parabéns! passou");
    } else if (cMedia >= 5) {
        console.log("Recuperação :(");
    } else if (cMedia <= 4) {
        console.log("Reprovado");
    }
}


var mediaFinal = classificaMedia(10);

console.log(mediaFinal);

function saudacao(nome) {
    console.log(`Saudações ${nome}! tudo bem com você?`);
}

var saudar = saudacao("Vinicius");
console.log(saudar);