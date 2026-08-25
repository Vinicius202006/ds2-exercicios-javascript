let idade = prompt("Digite sua idade");

console.log('número digitado: ${numero}');
console.log(typeof(idade));
let idademc = (idade + 5);
console.log('Daqui 5 anos você terá ${idademc}');
Number(idade);
let idademca = (idade + 5);
console.log(typeof(idade));
console.log('Daqui 5 anos você terá ${idademca}');





//Exercício 6 — Conversão de dados e cálculo de idade
//Criem exercicio04.js. Solicitem a idade do usuário e mostrem quantos anos ele
//terá daqui a cinco anos.
//O programa deverá:
//• Mostrar o valor original retornado pelo `prompt()`;
//• Mostrar o tipo desse valor;
//• Converter o valor para número;
//• Realizar corretamente a soma;
//• Exibir o resultado final.
//No `README.md`, expliquem por que `20 + 5` pode resultar em `205` quando o
//valor `20` é recebido pelo `prompt()` sem conversão.
//Commit sugerido: fix: converte idade antes do calculo