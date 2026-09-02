setTimeout(() => {
    let qtdUsuarios = 1;
    acabou: while (true) {

        const nome = prompt("Digite seu nome");
        if (nome === null || nome.trim() === "") {
            alert("Por favor digite um nome");
            continue;
        }

        const curso = prompt("Digite o nome do curso");
        if (curso === null || curso.trim() === "") {
            alert("Por favor digite um curso");
            continue;
        }

        let notaUm = 0;
        let notaDois = 0;

        while (true) {
            const entradaUm = prompt("Digite a primeira nota de 0 a 10 (1/2)");

            if (entradaUm !== null && entradaUm.trim() !== "") {
                notaUm = Number(entradaUm);
                if (!isNaN(notaUm) && notaUm >= 0 && notaUm <= 10) {
                    break;
                }
            }

            alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
        }

        while (true) {
            const entradaDois = prompt("Digite a segunda nota de 0 a 10 (2/2)");

            if (entradaDois !== null && entradaDois.trim() !== "") {
                notaDois = Number(entradaDois);

                if (!isNaN(notaDois) && notaDois >= 0 && notaDois <= 10) {
                    break;
                }
            }

            alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
        }



        function calculaMedia(n1, n2) {
            if (
                !isNaN(n1) &&
                !isNaN(n2) &&
                n1 <= 10 &&
                n1 >= 0 &&
                n2 <= 10 &&
                n2 >= 0
            ) {
                return (n1 + n2) / 2;
            } else {
                alert("Valor digitado não suportado, por favor digite um valor entre 0 e 10 nas notas");
            }
        }

        const mediaFinal = calculaMedia(notaUm, notaDois);

        function classificaMedia(classificarMedia) {

            const P = "Passou! Parabéns!";
            const RPC = "Ficou de recuperação";
            const RPV = "Está reprovado";

            if (classificarMedia >= 7) {
                return P
            } else if (classificarMedia >= 5) {
                return RPC
            } else {
                return RPV
            }
        };


        const classificacao = classificaMedia(mediaFinal);

        console.log(`Olá! ${nome}`);
        console.log(`Você está cursando: ${curso}`);
        console.log(`Sua média é: ${mediaFinal}`);
        console.log(`Portanto você: ${classificacao}`);

        while (true) {
            let resposta = prompt("Deseja cadastrar outro usuário? ( Sim | Não )");

            if (resposta === null) {
                alert("Digite sim ou não");
                continue;
            }

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