let Lucas = {
    nome: "Lucas",
    idade: 19,
    trabalhando: true
}
delete Lucas.idade;
console.log(Lucas);


var Lucas2 = new Object;
Lucas2.nome = "Lucas";
console.log(Lucas2.nome);

/*
Spread:

array1EX = [1,2,3]
array2EX = [4,5,6]
array3EX = [array1EX, arra2EX] --> [ [1,2,3] , [4,5,6] ]

array3_2EX = [...array1EX , ...array2EX] --> [1,2,3,4,5,6]
array3_3EX = [array1EX[0], array1EX[1], array1EX[2], array2EX[0], array2EX[1], array2EX[2]] // [1,2,3,4,5,6]

*/