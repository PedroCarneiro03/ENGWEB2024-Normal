
var express = require('express');
var router = express.Router();
var CONTRATO = require('../controllers/contrato')

/* Listar as CONTRATO (R) */
router.get('/', function(req, res) {

    const entidade = req.query.entidade; 
    const tipo = req.query.tipo;
    const nipc = req.query.nipc
    let query = {}; // Objeto de consulta inicial vazio

    // Adicionar condição de consulta com base no parâmetro 'especie'
    if (tipo) {
        query.tipoprocedimento = tipo;
    }

    // Adicionar condição de consulta com base no parâmetro 'implantacao'
    if (entidade) {
        query.entidade_comunicante = entidade;
    }

    if(nipc){
        query.NIPC_entidade_comunicante=nipc;
    }

    //console.log(query);
    CONTRATO.findByQuery(query)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.get('/entidades', function(req, res) {
    CONTRATO.distincts("entidade_comunicante")
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.get('/tipos', function(req, res) {
    CONTRATO.distincts("tipoprocedimento")
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* Consultar uma CONTRATO (R) */
router.get('/:id', function(req, res) {
    CONTRATO.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    });

/* Criar uma CONTRATO (C) */
router.post('/', function(req, res) {
    CONTRATO.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.jsonp(erro))
});

/* Alterar uma CONTRATO (U) */
router.put('/:id', function(req, res) {
    CONTRATO.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    });

/* Remover uma CONTRATO (D ) */
router.delete('/:id', function(req, res) {
    CONTRATO.remove(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;
