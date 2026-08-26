setTimeout(() => {
const login = "admin";
const senha = "1234";
let tentativas = 3;

while(true){
loginDigitado = prompt("Digite um usuário");

if(loginDigitado === login){
  break;  
} else
    alert("Usuário não encontrado");
};

while(true){
senhaDigitada = prompt("Digite uma senha");

if(senhaDigitada === senha){
    break;
} else {
    alert(`Você errou a senha, lhe restam ${tentativas} tentativas`);
    tentativas = (tentativas - 1)
};

if (tentativas<=0){
    alert("Você errou mais de 3 vezes, cancelando tentativa de entrada");
    window.location.reload();
} break;
}

console.log("Parabéns! você entrou!");
}, 100);