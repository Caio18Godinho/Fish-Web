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
 function exibir(){
     console.log('entrei no model exibir')
     var instrucao = `
         select Usuario.nome as nome, max(vida_peixe) as MelhoresTentativas
         from Usuario join questionario 
         on Usuario.idusuario = questionario.fkUsuario
         group by Usuario.nome order by max(vida_peixe) desc;
     `;
     console.log("Executando a instrução SQL: \n" + instrucao);
     return database.executar(instrucao);
 }
function graf(idusuario) {
    console.log('entrei no model graf')
    var instrucao = `
       select vida_peixe, idquestionario 
        from questionario 
        where fkUsuario = ${idusuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    exibir,
    graf,

};