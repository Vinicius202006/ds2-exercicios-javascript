setTimeout(() => {
const nome = prompt("Digite seu nome");
let n1, n2;

while (true) {
    const in1 = prompt("Digite a primeira nota (0 a 10):");

    if (in1 === null) {
        break;
    }

    const nl1 = in1.replace(',', '.').trim();

    if (nl1 === "") {
        window.alert("A caixa não pode ficar vazia!");
        continue;
    }

    n1 = Number(nl1);

    if (!isNaN(n1) && n1 >= 0 && n1 <= 10) {
        break;
    }

    window.alert("Precisa ser um valor de 0 a 10");
}

while (true) {
    const in2 = prompt("Digite a segunda nota (0 a 10):");

    if (in2 === null) {
        break;
    }

    const nl2 = in2.replace(',', '.').trim();

    if (nl2 === "") {
        window.alert("A caixa não pode ficar vazia!");
        continue;
    }

    n2 = Number(nl2);

    if (!isNaN(n2) && n2 >= 0 && n2 <= 10) {
        break;
    }

    window.alert("Precisa ser um valor de 0 a 10");
}

if (n1 !== undefined && n2 !== undefined) {
    const media = (n1 + n2) / 2;

    console.log(`Nome: ${nome}`);
    console.log(`Nota 1: ${n1}`);
    console.log(`Nota 2: ${n2}`);

    if (media >= 0 && media <= 10) {
        console.log(`Média: ${media}`);

        if (media >= 7) {
            console.log(`Aprovado`);
        } else if (media >= 5) {
            console.log(`Recuperação`);
        } else {
            console.log(`Reprovado`);
        }
    } else {
        console.log("Média Inválida");
    }
} else {
    console.log("Processo cancelado.");
}
}, 100);