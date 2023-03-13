function inicio() {

    //Variáveis 

    var carrinho = 0; //para armanezar o valor das compras
    var opcao; //para o switch 1

    //Variáveis de preco para facilitar as contas
    let precoCamisa = 50;
    let precoCalca = 100;
    let precoMeia = 20;

    //Variavel para o loop geral
    let flag = true;
    let repetir;

    do {
        opcao = parseInt(prompt("Qual produto você deseja visualizar?\n\nCamisa: 1\nCalça: 2\nMeia: 3"));

        while ((opcao !== 1 && opcao !== 2 && opcao !== 3)) {
            opcao = parseInt(prompt("Qual produto você deseja visualizar?\n\nCamisa: 1\nCalça: 2\nMeia: 3"));
        }

        switch (opcao) {

            case 1:

                let escolha = prompt("Produto: Camisa\n" +
                "Preço: R$" + precoCamisa + "\nDeseja comprar uma camisa? (s/n)");
                while (escolha != 's' && escolha != 'n') {
                    escolha = prompt("Produto: Camisa\n" +
                    "Preço: R$" + precoCamisa + "\nDeseja comprar uma camisa? (s/n)");
                }

                if (escolha == 's') {
                    alert("Obrigado por comprar conosco!");
                    carrinho = carrinho + precoCamisa;
                } else {
                    alert("Volte sempre!");
                }

                break;

            case 2:
                alert("Produto: Calça\n" +
                    "Preço: R$" + precoCalca);

                let escolha2 = prompt("Deseja comprar uma calça? (s/n)");
                while (escolha2 != 's' && escolha2 != 'n') {
                    escolha2 = prompt("Deseja comprar uma calça? (s/n)");
                }

                if (escolha2 == 's') {
                    alert("Obrigado por comprar conosco!");
                    carrinho = carrinho + precoCalca;
                } else {
                    alert("Volte sempre!");
                }

                break;

            case 3:
                alert("Produto: Meia\n" +
                    "Preço: R$" + precoMeia);

                let escolha3 = prompt("Deseja comprar uma meia? (s/n)");
                while (escolha3 != 's' && escolha3 != 'n') {
                    escolha3 = prompt("Deseja comprar uma meia? (s/n)");
                }

                if (escolha3 == 's') {
                    alert("Obrigado por comprar conosco!");
                    carrinho = carrinho + precoMeia;
                } else {
                    alert("Volte sempre!");
                }

                break;

            // default:
            //     alert("Escolha uma opção correta!");
            // break

        }

        repetir = prompt("Deseja realizar mais compras? (s/n)");
        while (repetir != 's' && repetir != 'n') {
            repetir = prompt("Deseja realizar mais compras? (s/n)");
        }

        if (repetir == 's'){
            flag = true;
        } else {
            flag = false;
        }

    } while (flag == true);

    alert ("Total comprado: R$" + carrinho);

}
