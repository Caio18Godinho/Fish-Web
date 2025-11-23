var quizzModel = require("../models/quizzModel");

function cadastrarQuizz(req, res) {
    var idusuario = req.body.idusuarioServer
    var vidaPeixe = req.body.pctAcertosServer
    
     quizzModel.cadastrarQuizz(idusuario, vidaPeixe)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o insert! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
}

module.exports = {
    cadastrarQuizz
}