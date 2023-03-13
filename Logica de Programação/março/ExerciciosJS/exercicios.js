function cumprimentar(nome) {
    console.log("Olá, " + nome);
}


function calcularIdadeDias(idade) {
    let calculo = (idade * 365);
    console.log(idade + " anos equivale a " + calculo + " dias");
}


function calcularSalario(horasTrabalhadas, salarioHora) {
    let calculo = horasTrabalhadas * salarioHora;
    console.log("Salário igual a R$" + calculo) + " mensal";
}


var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function nomeDoMes(numeroMes) {
    numeroMes--;

    for (let i = 0; i < mes.length; i++) {
        if (numeroMes == i) {
            console.log(mes[i]);
        }
    }

    //console.log(mes[numeroMes])

}



function maiorOuIgual(num, num2) {
    if (num > num2) {
        console.log(num + " é maior que " + num2);
    } else if (num == num2) {
        console.log(num + " é igual a " + num2);
    } else if (num < num2) {
        console.log(num + " é menor que " + num2);
    } else {
        console.log("yes");
    }
}


function inverso(valor) {

    //console.log(typeof valor);  --> para visualizar o tipo da variavel (a saida do typeof é o nome do tipo)

    //a função deve mostrar o inverso doq foi informado (caso for boolean ou number)
    if (typeof valor === "boolean") {

        if (valor == true) {
            console.log(false);
        } else {
            console.log(true);
        }

    } else if (typeof valor === "number") {
        console.log(valor * -1);
    } else if (typeof valor === "string") {
        console.log("booleano ou número esperado, mas o parâmetro é do tipo " + typeof valor);
    } else {
        console.log("O parâmetro informado não é String, nem um número");
    }

}


function estaEntre(num, minimo, maximo, inclusivo) {

    if (inclusivo == true) {

        if (num >= minimo && num <= maximo) {
            console.log(true);
        } else {
            console.log(false);
        }

    } else {

        if (num > minimo && num < maximo) {
            console.log(true);
        } else {
            console.log(false);
        }

    }

}

var soma = 0;

function multiplicar(num, num2) {

    if (num >= 0 && num2 >= 0) {

        for (let i = 0; i < num2; i++) {
            soma = soma + num;
        }

        console.log("num: " + num + "\nnum2: " + num2 + "\nresultado: " + soma);

    } else {
        console.log("Digite números naturais!");
    }

}

function parOuImpar(num) {
    console.log(num % 2 == 0 ? `O número ${num} é par!` : `O número ${num} é ímpar!`);
}


function repetir(elemento, numRepeticao) {
    let array = [];
    for (let i = 0; i < numRepeticao; i++) {
        array.push(elemento);
    }

    return console.log(array);
}


function simboloMais(numRepeticao) {
    let simbolo = "+";
    for (let i = 0; i < (numRepeticao - 1); i++) { //(numRepeticao - 1) --> pois já começa com um "+" na variavel
        simbolo += "+";
    }
    return console.log(simbolo);
}


function receberPrimeiroEUltimoElemento() {
    let array = [];
    let array2 = [];
    let elemento;
    let repeticao;

    do { repeticao = parseInt(prompt("Quantos elementos serão adicionados?")); } while (isNaN(repeticao));

    for (let i = 0; i < repeticao; i++) {
        elemento = prompt("Digite algo:");
        array.push(elemento);
    }

    array2.push(array[0]);
    array2.push(array[array.length - 1]);

    return console.log(array2);
}


function receberPrimeiroEUltimoElemento2(array) { //[0,1,2]
    let result = [];

    result.push(array[0]);
    result.push(array[array.length - 1]);

    return console.log(result);
}

