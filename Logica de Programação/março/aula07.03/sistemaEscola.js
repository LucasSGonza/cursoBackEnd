function sistemaEscola() {

    //cadastrar professores ou alunos
    let professores = ["Danilo", "Aldo", "Jackson"]; //3 professores
    let turma = ["Rodrigo", "Tayna", "Lucas", "Leticia", "Maria", "Eduarda"];


    let aluno; //variavel para pesquisar nome de aluno e comparar

    let notas = []; //Array para armazenar as notas

    let i = 0; //para os 'for'
    let media, soma = 0; //para calcular a media

    let escolha; //definir quem irá acessar o sistema (professor ou aluno)
    let login; //variavel para comparar com os alunos ou professores existentes
    let flag = false;//booleano para verificar se o login(professor ou aluno) e se a variavel aluno existe

    //variaveis para a repetição geral do código
    let flag2 = false; //para repetir o programa ou não (no while)
    let repetir; //perguntar se deseja repetir ou nao



    do {

        flag = false;
        //login
        do {
            escolha = prompt("Você é aluno ou professor?");
        } while ((escolha != "aluno" && escolha != "Aluno") && (escolha != "professor" && escolha != "Professor"));

        //garantir que só passe 'aluno' ou 'professor' (minusculo)
        escolha = escolha.toLowerCase();


        //separa o sistema entre professor e aluno
        switch (escolha) {

            case "aluno":

                login = prompt("Digite seu nome (login):");

                for (i = 0; i < turma.length; i++) {

                    if (login == turma[i]) {

                        if (notas.length == 0) { // notas == null
                            alert("Notas ainda não digitadas!");
                        } else {
                            alert(`Notas: ${notas}\nMedia: ${media}`);
                            if (media >= 6) {
                                alert("APROVADO!");
                            } else {
                                alert("REPROVADO!");
                            }
                        }

                        flag = true;
                    }
                }

                if (flag == false) {
                    alert("Login incorreto ou inexistente");
                }

                break;

            case "professor":

                login = prompt("Digite seu nome (login):");

                for (i = 0; i < professores.length; i++) {

                    if (login == professores[i]) {

                        aluno = prompt("Deseja inserir as notas de qual aluno? \n" + turma);

                        for (i = 0; i < turma.length; i++) {

                            if (aluno == turma[i]) {

                                for (i = 0; i < 3; i++) {
                                    notas[i] = parseFloat(prompt(`Digite a nota ${i + 1}:`));
                                    soma = soma + notas[i];
                                }

                                media = (soma / notas.length);

                                console.log(notas);
                                console.log(media);

                                flag = true;
                            }

                        }

                        if (flag == false) {
                            alert("Nome do aluno incorreto ou inexistente");
                        }

                        flag = true;
                    }
                }

                if (flag == false) {
                    alert("Login incorreto ou inexistente");
                }

                break;

        }

        //definir se o sistema irá repetir ou não
        do { repetir = prompt("Deseja repetir? (s/n)"); } while (repetir != 's' && repetir != 'n');

        if (repetir == 's') {
            flag2 = true;
        } else {
            flag2 = false;
        }

    } while (flag2 == true);
}