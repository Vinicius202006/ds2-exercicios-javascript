setTimeout(() => {
let todosNumeros = [];
        let soma = 0;
        while (true) {
            let numero = Number(prompt("Digite vários números e aperte enter, quando quiser encerrar pressione 0 e de enter"));
            // Valida e alerta se é e que precisa ser um número
            if (isNaN(numero)) {
                alert("Valor inválido! Digite apenas números.");
                continue
            }
            // Valida se é um número
            if (!isNaN(numero)) {

            }
            //Quebra o while ao digitar 0
            if (numero == 0) {
                break;
            }

            soma += numero;

            todosNumeros.push(numero);

        }
        //Media
        let qtd = todosNumeros.length;
        let total = soma;
        let media = (total / qtd);

        //Maior numero
        maiorNumero = Math.max(...todosNumeros);
        //Menor numero
        menorNumero = Math.min(...todosNumeros);

        //Acrescentar 0 no ínicio
        todosNumeros.unshift(0);

        //Mostra os valores
        console.log(todosNumeros);
        console.log(`Quantidade de números digitados: ${todosNumeros.length}`);
        console.log(`Soma dos valores informados: ${soma}`);
        console.log(`Média dos valores: ${media}`);
        console.log(`O maior número digitado foi o: ${maiorNumero}`);
        console.log(`O menorr número digitado foi o: ${menorNumero}`);
}, 100);