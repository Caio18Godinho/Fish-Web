var dashModel = require("../models/dashModel");

function listar(req, res) {

    var idusuario= req.params.idusuario;

    dashModel.listar(idusuario).then(function(resultado){
        res.json(resultado)
        console.log('controller listar', resultado)
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
}