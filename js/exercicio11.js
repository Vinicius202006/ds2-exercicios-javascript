function somar(numero1, numero2) {
    return numero1 + numero2
};

var soma = somar(4, 5);

console.log(`Soma: ${soma}`);

function calculaMedia(nota1, nota2) {
    if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0) {
        return (soma) / 2
    } else {
        console.log("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
    }

};

var media = calculaMedia(10, 10);

console.log(`Média: ${media}`);

function classificaMedia(cMedia) {

    if (cMedia >= 7) {
        return "Parabéns! passou";
    } else if (cMedia >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


var mediaFinal = classificaMedia();

console.log(mediaFinal);

function saudacao(nome) {
    return `Saudações ${nome}! tudo bem com você?`;
}

var cumprimento = saudacao("Vinicius");
console.log(cumprimento);