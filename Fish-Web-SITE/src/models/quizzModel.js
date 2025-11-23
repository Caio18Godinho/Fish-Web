var database = require("../database/config")


function cadastrarQuizz(idusuario ,vidaPeixe) {
    var instrucao = `
        INSERT INTO questionario (vida_peixe, fkUsuario) VALUES (${vidaPeixe},'${idusuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarQuizz
};