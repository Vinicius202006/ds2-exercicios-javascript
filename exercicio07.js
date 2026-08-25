const usuarioCerto ="admin";
const senhaCerta ="1234";

while(true) {
const usuario = prompt("Digite o usuário");
if(usuario === "admin"){
    break;
}  
    window.alert("Usuário errado");
} 


while(true) {
    const senha = prompt("Digite a senha");
    if(senha === "1234"){
   break;
}  
    window.alert("Login errado");
}   
    window.alert("Login efetuado com sucesso! Bem vindo Admin!");
    console.log("Login efetuado com sucesso! Bem vindo Admin!");