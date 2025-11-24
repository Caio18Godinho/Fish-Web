var database = require("../database/config")

function listar(idusuario) {
    console.log('entrei no model listar')
    var instrucao = `
        select max(vida_peixe) as MelhorTentativa, min(vida_peixe) as PiorTentativa, count(fkUsuario) as partidas
        from questionario join Usuario 
        on Usuario.idusuario = questionario.fkUsuario
        where fkUsuario = ${idusuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
};