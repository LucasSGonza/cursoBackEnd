//https://my-json-server.typicode.com/LucasSGonza/cursoBackEnd --> jogar este arquivo (junto do html e CSS) no github (main)

//https://www.freecodecamp.org/portuguese/news/fetch-api-como-fazer-solicitacoes-get-e-post-em-javascript/#:~:text=Para%20fazer%20uma%20solicita%C3%A7%C3%A3o%20GET,incluindo%20um%20objeto%20de%20configura%C3%A7%C3%A3o.

var nome, cep, logradouro, bairro, cidade, estado, pais;

function limpaCampos() {
    nome = document.getElementById("nome").value = '';
    cep = document.getElementById("cep").value = '';
    logradouro = document.getElementById("logradouro").value = '';
    bairro = document.getElementById("bairro").value = '';
    cidade = document.getElementById("cidade").value = '';
    estado = document.getElementById("estado").value = '';
    pais = document.getElementById("pais").value = '';
    //localStorage.clear();
}

function defineCampos() { //atribui a variavel ao input --> por isso na função buscarEndereco() é necessário o .value no nome (ex: nome.value)
    nome = document.getElementById("nome"); 
    cep = document.getElementById("cep");
    logradouro = document.getElementById("logradouro");
    bairro = document.getElementById("bairro");
    cidade = document.getElementById("cidade");
    estado = document.getElementById("estado");
    pais = document.getElementById("pais");
}

function buscarEndereco() {

    // 1º puxar oq foi digitado pelo usuário
    defineCampos();

    let cepQuaseNovo = [...cep.value]; //usando spread -> transforma ("espalha") a string em caracteres;

    cepQuaseNovo.splice(5, 0, "-");
    //https://www.freecodecamp.org/portuguese/news/como-inserir-um-elemento-em-um-array-em-js/#:~:text=Se%20voc%C3%AA%20deseja%20adicionar%20um,usar%20o%20m%C3%A9todo%20concat()%20.


    console.log(cepQuaseNovo);

    let cepAtualizado = cepQuaseNovo.join(""); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    console.log(cepAtualizado);


    if (cep.value == "") { //Verifica se o cep está vazio
        limpaCampos();
        alert("CEP NÃO PODE ESTAR VAZIO!");
    } else if (isNaN(cep.value)) { //Verifica se o cep so tem números
        limpaCampos();
        alert("Por gentileza informar somente números no CEP!");
    } else {
        // 2º fazer a conexão com a API

        var url = `https://my-json-server.typicode.com/LucasSGonza/cursoBackEnd/cep/?code=${cepAtualizado}` // --> para pegar somente os arquivos .json na pasta

        fetch(url)
            .then(resposta => resposta.json())
            .then(data => {
                //.ficar atento a como as informações são retornadas, para poder capturá-las adquadamente
                bairro.value = data[0].district;
                logradouro.value = data[0].address; 
                cidade.value = data[0].city; 
                estado.value = data[0].state;
                pais.value = "BR";
            });
    }

}


function cadastrarPessoa() {
    defineCampos();
    var pessoa = {
        nome: nome.value,
        cep: cep.value,
        logradouro: logradouro.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        pais: pais.value
    }

    var lista = [];

    lista = JSON.parse(localStorage.getItem("Pessoas"));

    if (lista == null) {
        lista = [];
    }
    lista.push(pessoa);
    localStorage.setItem("Pessoas", JSON.stringify(lista));
    alert("Pessoa " + pessoa.nome + " foi cadastrada com sucesso!");

}