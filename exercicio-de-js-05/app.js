// Inicializamos o contador com 1, pois queremos começar a contar a partir do número 1
let contador = 1;

// Função para mostrar os números na tela
function mostrarNumero() {
    // Se o contador for menor ou igual a 10, mostramos o número
    if (contador <= 10) {
        // Exibimos o número na tela
        console.log(contador);
        // Incrementa o contador em 1 para passar para o próximo número
        contador++;
        // Chamamos a função novamente após 1 segundo para mostrar o próximo número
        setTimeout(mostrarNumero, 1000);
    } else {
        // Quando chegamos ao 10, mostramos uma mensagem de fim de jogo
        console.log('Fim do jogo!');
    }
}

// Inicia o jogo chamando a função mostrarNumero
mostrarNumero();
