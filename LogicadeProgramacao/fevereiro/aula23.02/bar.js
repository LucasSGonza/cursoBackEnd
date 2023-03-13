function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 1; i > 0; i--) {
        alert(`Aguarde ${i} segundos...`);
        await sleep(i * 100);
    }
    alert("Obrigado, volte sempre!");
}


function calculaPrecoChopp(litros) {
    let preco = litros * 30;
    return preco;
}

function bar() {

    var litros;
    let pilsen = 50;
    let ipa = 50;

    alert("Seja Bem vindo ao Bar!\nHoje temos Chopp Ipa e Pilsen,\nnos tamanhos P de 300ml e M " +
        "500ml\nO P custando R$9,00 e o M R$15,00");

    do {
        var copo = prompt("Qual o copo que você quer?");
    } while (((copo != "P") && (copo != "p")) && ((copo != "M") && (copo != "m")));

    copo = copo.toUpperCase();
    console.log("copo: " + copo);

    switch (copo) {

        case "P":
            litros = 0.3;
            break;

        case "M":
            litros = 0.5;
            break;

    }

    console.log("litros: " + litros);

    do {
        var chopp = prompt("Qual o chopp que você quer?\nPilsen ou Ipa?");
    } while ((chopp != "Pilsen" && chopp != "Ipa") && (chopp != "pilsen" && chopp != "ipa"));

    chopp.toLowerCase();
    console.log("chopp: " + chopp);

    switch (chopp) {

        case "pilsen":
            pilsen = pilsen - litros;
            console.log("pilsen: " + pilsen);
            break;

        case "ipa":
            ipa = ipa - litros;
            console.log("ipa: " + ipa);
            break;

    }

    if (pilsen >= litros || ipa >= litros) {
        alert(`O total foi de R$ ${calculaPrecoChopp(litros)}`);

        var totalCompra = calculaPrecoChopp(litros);

        do {
            var dinheiroPago = parseFloat(prompt("Insira o dinheiro: "));
        } while (isNaN(dinheiroPago));


        console.log ("dinheiroPago: " + dinheiroPago + "\ntotalCompra: " + totalCompra);

        if (totalCompra > dinheiroPago) { //faltou dinheiro

            do {

                let restoPagar = totalCompra - dinheiroPago; //para saber quanto deve

                do{
                    var pagAdicional = parseFloat(prompt(`Falta mais R$${restoPagar} para pagar!\nInserir valor:`));
                } while (isNaN(pagAdicional));
                
                dinheiroPago += pagAdicional;
                //console.log ("dinheiroPago: " + dinheiroPago);  --> caso desejar visualizar os calculos

            } while (totalCompra > dinheiroPago);

            console.log ("dinheiroPago: " + dinheiroPago);

        }

        if (dinheiroPago > totalCompra){ //pagou a mais, logo, tem troco
            let troco = dinheiroPago - totalCompra;
            alert (`Seu troco foi de R$${troco}`);
            totalCompra += troco; //para o ultimo if funcionar
        }

        if (dinheiroPago == totalCompra) { //caso normal (pagou oq devia)
            //alert("PAGAMENTO EFETUADO!\nVolte sempre!");
            demo();
        }

    }


}
