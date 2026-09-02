setTimeout(() => {
    const usuarioCerto = "admin";
    const senhaCerta = "1234";


    const usuario = prompt("Digite o usuário");
    if (usuario === "admin") {
        const senha = prompt("Digite a senha");
        if (senha === senhaCerta) {
            console.log("Acesso liberado!")
        } else {
            console.log("Acesso negado");
        }
    } else {
        console.log("Acesso negado");
    }

}, 100);