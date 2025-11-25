var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listar/:idusuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.listar(req, res);
});
 router.get("/exibir", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.exibir(req, res);
});
router.get("/graf/:idusuario", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.graf(req, res);
});
module.exports = router;