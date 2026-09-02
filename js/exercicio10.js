setTimeout(() => {
    const login = "admin";
    const senha = "1234";
    let tentativas = 4;

    while (true) {
        loginDigitado = prompt("Digite um usuário");

        if (loginDigitado === login) {
            break;
        } else
            alert("Usuário não encontrado, digite novamente");
    };

    while (true) {
        senhaDigitada = prompt("Digite uma senha");

        if (loginDigitado === login && senhaDigitada === senha) {
            break;
        } else if (loginDigitado !== login) {

        } else if (senhaDigitada !== senha) {
            alert(`Você errou a senha, lhe restam ${tentativas-1} tentativas`);
            tentativas = (tentativas - 1)
        };

        if (tentativas <= 0) {
            alert("Você errou mais de 3 vezes, cancelando tentativa de entrada");
            window.location.reload();
            break;
        }
    }

    console.log("Parabéns! você entrou!");
}, 100);