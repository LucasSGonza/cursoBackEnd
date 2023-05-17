//Adicionando as bibliotecas do projeto no código
const express = require('express');
const bodyParser = require('body-parser');

//Criando variavel para utilizar a biblioteca
const app = express();
app.use(bodyParser.json());

//variável para armazenar os json's dos veículos
let vehicles = []; //array

//Criando as rotas

//Get geral do geral
app.get('/', (req,res) => {
    res.json({'teste': 'Hello,World'});
})

//GET geral
app.get('/vehicles', (req, res) => {
    res.json(vehicles); //retorna o 'BD'
});

//GET com parâmetro
app.get('/vehicles/:placa', (req, res) => {
    const { placa } = req.params
    const vehicle = vehicles.find(v => v.placa === placa) //procura na Array a placa e retorna ela
    if (vehicle) { //vehicle = objeto completo
        res.json(vehicle);
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
});

//POST -> cadastrar
app.post(('/vehicles'), (req, res) => {
    const { placa, marca, modelo, ano } = req.body;
    const vehicle = { placa, marca, modelo, ano };
    vehicles.push(vehicle);
    console.log(vehicles);
    res.status(201).json({ message: 'Veículo cadastrado com sucesso!' })
});

//PUT -> atualizar
app.put('/vehicles/:placa', (req, res) => {
    const { placa } = req.params;
    const { marca, modelo, ano } = req.body;
    const vehicle = vehicles.find(v => v.placa == placa);
    if (vehicle) { //vehicle => objeto completo
        vehicle.marca = marca || vehicle.marca;
        vehicle.modelo = modelo || vehicle.modelo;
        vehicle.ano = ano || vehicle.ano;
        res.json({ message: 'Informações do veículo atualizadas com sucesso.' });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' });
    }
})

//Delete
app.delete('/vehicles/:placa', (req, res) => {
    const { placa } = req.params;
    const vehicleIndex = vehicles.findIndex(v => v.placa === placa);
    if (vehicleIndex !== -1) {
        vehicles.splice(vehicleIndex, 1);
        res.json({ message: 'Veículo excluído com sucesso.' });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' });
    }
});

//Iniciar o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

