//Importando a biblioteca express e associando-a ao server
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());


//Array para armazenar os endereços
let address = [];

//endereço será formado por: cep, rua, bairro, cidade, estado, país


//ROTAS

//GET geral -> buscar
server.get('/address', (req, res) => {
    res.json(address);
});

//GET com parâmetro do CEP
server.get('/address/:cep', (req, res) => {
    const { cep } = req.params;
    const address_cep = address.find(c => c.cep === cep); //irá comparar em cada item da Array se existe um cep igual ao citado no parâmetro da rota
    //console.log(address_cep);//retorna o json (obj) completo
    if (address_cep) { //verifica se existe um valor
        res.json(address_cep);
    } else {
        res.status(404).json({ message: 'CEP não encontrado' });
    }
});

//POST -> cadastrar
server.post('/address', (req, res) => {
    const { cep, rua, bairro, cidade, estado, pais } = req.body;
    const new_address = { cep, rua, bairro, cidade, estado, pais };
    address.push(new_address);
    res.status(201).json({ message: 'Endereço cadastrado!' });
});

//PUT -> atualiza
server.put('/address/:cep', (req, res) => {
    const { cep } = req.params;
    const { rua, bairro, cidade, estado, pais } = req.body;
    const upt_address = address.find(c => c.cep === cep);
    if (upt_address) {
        upt_address.cep = cep; //vem do parâmetro
        upt_address.rua = rua;
        upt_address.bairro = bairro;
        upt_address.cidade = cidade;
        upt_address.estado = estado;
        upt_address.pais = pais;
        res.json({ message: "Endereço atualizado" });
    } else {
        res.status(401).json({ message: "Endereço não encontrado" });
    }
});

//DELETE -> remove um objeto da Array a partir do CEP
server.delete('/address/:cep', (req, res) => {
    const { cep } = req.params;
    const address_to_delete_index = address.findIndex(c => c.cep === cep); //pega o CEP no parâmetro da rota e procura o índice do elemento que possui esse CEP
    if (address_to_delete_index != -1) {
        address.splice(address_to_delete_index,1);
        res.json({ message: `Endereço com cep ${cep} deletado`});
    } else {
        res.status(401).json({ message: "Endereço não encontrado" });
    }
});

//Define em qual porta o servidor irá funcionar
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});