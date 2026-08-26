setTimeout(() => {
let idade = Number(prompt("Digite sua idade"), 10);

console.log(`Você tem ${idade} anos, portanto:`);
if (idade <= 0 || !idade) {
    console.log("Idade Inválida");
} else if (idade >= 18) {
    console.log("Voto obrigatório");
} else if (idade >= 16) {
    console.log("Voto opcional");
} else {
    console.log("Não pode votar");
}
}, 100);