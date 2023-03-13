function inicio() {

    let poligono = 0;
    let resposta;
    let flag = true;

    do {
        poligono = parseInt(prompt("\nQual polígono voce deseja calcular a área e o perímetro? \nQuadrado: 1 \nTriangulo: 2 \nCancelar: 3")); //Cancelar: 3

        if (poligono == 1) {
            let lado;
            do {
                resposta = parseInt(prompt("\nVoce deseja calcular a área ou perímetro? \nArea: 1 \nPerimetro: 2 \n\n"));

                if (resposta == 1) {

                    lado = parseInt(prompt("\nDigite o valor do lado do quadrado: "));
                    alert("Area: " + calcularAreaQuadrado(lado) + "\n");


                } else if (resposta == 2) {
                    lado = parseInt(prompt("\nDigite o valor do lado do quadrado: "));
                    alert("Perimetro: " + calcularPerimetroQuadrado(lado) + "\n");
                }

            } while (resposta != 1 && resposta != 2);

        }

        else if (poligono == 2) {

            let base, altura, lado2, lado3;
            resposta = parseInt(prompt("\nVoce deseja calcular a área ou perímetro? \nArea: 1 \nPerimetro: 2 \n\n"));

            if (resposta == 1) {

                base = parseInt(prompt(("Digite o valor da base do triangulo: ")));

                altura = parseInt(prompt(("Digite o valor da altura do triangulo: ")));

                alert("\nArea: " + calcularAreaTriangulo(base, altura) + "\n");

            } else if (resposta == 2) {

                base = parseInt(prompt(("Digite o valor da base do triangulo: ")));

                lado2 = parseInt(prompt(("Digite o valor do lado2 do triangulo: ")));

                lado3 = parseInt(prompt(("Digite o valor do lado2 do triangulo: ")));

                alert("Perimetro: " + calcularPerimetroTriangulo(base, lado2, lado3) + "\n");

            }

        }
        
        else if (poligono == 3) {
            alert("Adeus!");
            flag = false;
        }
        

    } while ( (poligono != 1 && poligono != 2 && poligono != 3 ) || flag == true); // && poligono != 3   --> caso eu queira que após concluir algo volte ao inicio (ira criar um looping
    // infinito caso nao coloque essa condição)


}



//Funções para o quadrado
function calcularAreaQuadrado(lado) {
    let area
    area = lado * lado
    return area
}
function calcularPerimetroQuadrado(lado) {
    let perimetro
    perimetro = lado * 4
    return perimetro
}

//Funções para o triângulo
function calcularAreaTriangulo(base, altura) {
    let area
    area = (base * altura) / 2
    return area
}
function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    let perimetro
    perimetro = lado1 + lado2 + lado3
    return perimetro
}