function pedraPapelTesoura() {

    let jogador1, jogador2, repetir;

    do {

        do{jogador1 = prompt("Jogador 1:\nPedra, Papel ou Tesoura?");} while(jogador1 != "Pedra" && jogador1 != "Papel" && jogador1 != "Tesoura");
        
        do{jogador2 = prompt("Jogador 2:\nPedra, Papel ou Tesoura?");} while(jogador2 != "Pedra" && jogador2 != "Papel" && jogador2 != "Tesoura");

        //casos
        if (jogador1 == "Pedra" && jogador2 == "Papel") {
            alert("Papel envolve Pedra\nJogador 2 VENCEU!");
        } else if (jogador1 == "Pedra" && jogador2 == "Tesoura") {
            alert("Pedra quebra Tesoura\nJogador 1 VENCEU!");
        } else if (jogador1 == "Pedra" && jogador2 == "Pedra") {
            alert("Pedra e Pedra\nEMPATE!");
        } else if (jogador1 == "Tesoura" && jogador2 == "Papel") {
            alert("Tesoura corta Papel\nJogador 1 VENCEU!");
        } else if (jogador1 == "Tesoura" && jogador2 == "Tesoura") {
            alert("Tesoura e Tesoura\nEMPATE!");
        } else if (jogador1 == "Tesoura" && jogador2 == "Pedra") {
            alert("Pedra quebra Tesoura\nJogador 2 VENCEU!");
        } else if (jogador1 == "Papel" && jogador2 == "Papel") {
            alert("Papel e Papel\nEMPATE!")
        } else if (jogador1 == "Papel" && jogador2 == "Pedra") {
            alert("Papel envolve Pedra\nJogador 1 VENCEU!")
        } else if (jogador1 == "Papel" && jogador2 == "Tesoura") {
            alert("Tesoura corta Papel\nJogador 2 VENCEU!")
        }

        //repetição
        do { repetir = prompt("Deseja repetir? (s/n)"); } while (repetir != 's' && repetir != 'n');

    } while (repetir == 's');

}