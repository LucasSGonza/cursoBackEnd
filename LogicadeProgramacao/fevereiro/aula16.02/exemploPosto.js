function inicio() {

    let i;
    var flag = false; //para repetir ou nao
    var resposta; //para pegar a resposta se o usuario deseja abastecer novamente

    var litros, dinheiro, tanqueCarro = 0, caixaPosto = 0, bomba = 500; //variaveis principais

    do {
        //Cliente
        dinheiro = parseInt(prompt("Quanto você deseja abastecer? (R$)"));
        litros = dinheiro / 5; //  1L --> R$5,00

        console.log("Dinheiro: R$" + dinheiro + "\nLitros: " + litros + "L\nCapacidade bomba: " + bomba + "L");


        //Frentista
        if (dinheiro > 0 && bomba > 0 && litros <= bomba) { 

            for (i = 0; i < litros; i++) {
            }

            tanqueCarro = tanqueCarro + i;
            caixaPosto = caixaPosto + dinheiro;
            bomba = bomba - litros;

        } else {
            alert("NEGADO!\nProcure o frentista mais proximo!");
        }


        //Deseja repetir?
        resposta = prompt("Deseja abastecer novamente? (s/n)");

        while (resposta != 's' && resposta != 'n') {
            resposta = prompt("Deseja abastecer novamente? (s/n)");
        }

        if (resposta == 's') {
            flag = true;
        } else if (resposta == 'n') {
            flag = false;
        }

    } while (flag == true);

    console.log("Gasolina Tanque: " + tanqueCarro + "L\nCaixa Posto: R$" + caixaPosto + "\nCapacidade Bomba: " + bomba + "L");

}