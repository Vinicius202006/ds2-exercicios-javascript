setTimeout(() => {
const nome = prompt("Escreva seu nome");
const idade = prompt("idade");
const curso = prompt("curso");
const cidade = prompt("cidade");

console.log("Olá, meu nome é " + nome + " tenho " + idade + " anos, moro em " + cidade + " e estou cursando " + curso);
console.log(`Olá, meu nome é ${nome} tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}`);
}, 100);