setTimeout(() => {
let qtdUsuarios = 1;
acabou: while (true) {

    const nome = prompt("Digite seu nome");
    const curso = prompt("Digite o nome do curso");
    let notaUm = 0;
    let notaDois = 0;

    while (true) {
        notaUm = Number(prompt("Digite a primeira nota de 0 a 10 (1/2)"));
        if (!isNaN(notaUm) && notaUm >= 0 && notaUm <= 10) {
            break;
        } else { alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas") }
    };
    while (true) {
        notaDois = Number(prompt("Digite a segunda nota de 0 a 10 (2/2)"));
        if (!isNaN(notaDois) && notaDois >= 0 && notaDois <= 10) {
            break;
        } else { alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas") }
    };

    notaUmcm = Number(notaUm);
    notaDoiscm = Number(notaDois);

    function calculaMedia(n1, n2) {
        if (!isNaN(n1) && !isNaN(n2) && n1 <= 10 && n1 >= 0 && n2 <= 10 && n2 >= 0) {
            return (n1 + n2) / 2
        } else {
            alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
        }
    };

    //console.log(notaUmcm);
    //console.log(typeof notaUmcm);
    //console.log(notaDoiscm);
    //console.log(typeof notaDoiscm);

    function classificaMedia(classificarMedia) {

        P = "Passou! parabéns!"
        RPC = "Ficou de recuperação"
        RPV = "Está reprovado"
        if (classificarMedia >= 7) {
            return P
        } else if (classificarMedia >= 5) {
            return RPC
        } else {
            return RPV
        }
    };

    var mediaFinal = calculaMedia(notaUmcm, notaDoiscm);
    var classificacao = classificaMedia(mediaFinal);

    console.log(`Olá! ${nome}`);
    console.log(`Você está cursando: ${curso}`);
    console.log(`Sua média é: ${mediaFinal}`);
    console.log(`Portanto você: ${classificacao}`);

    while (true) {
        resposta = prompt("Deseja cadastrar outro usuário? ( Sim | Não )");
        let respostaLimpa = resposta.trim();
        let primeiraLetra = respostaLimpa.charAt(0).toUpperCase();
        //Mudança
        if (primeiraLetra === "N") {
            console.log(`-----------------------------------------------------`);
            console.log(`Você cadastrou ${qtdUsuarios} usuários`);
            break acabou;

        } else if (primeiraLetra === "S") {
            console.log(`-----------------------------------------------------`);
            qtdUsuarios = qtdUsuarios + 1;
            break;
        } else {
            alert("Digite sim ou não");
            continue
        };
    };
};
}, 100);