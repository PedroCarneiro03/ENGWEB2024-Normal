var express = require('express');
var router = express.Router();
var axios =require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
    .then(resposta=>{
      res.render('index', { title: 'Gestao de contratos Home Page' ,lista:resposta.data});
    })
    .catch(erro=>{
      res.render("error",{error: erro, message:"Erro ao recuperar as plantas"})
    })
});

router.get('/entidades/:nipc', function(req, res, next) {

  axios.get("http://localhost:16000/contratos?nipc=" + req.params.nipc)
    .then(resposta=>{
      
      
      const totalPrecoContratual = resposta.data.reduce((acc, contrato) => {
        return acc + parseFloat(contrato.precoContratual.replace(',', '.'));
      }, 0);
      
      res.render('entidade', { title: 'Entidade ' + req.params.nipc ,lista:resposta.data,valor:totalPrecoContratual.toFixed(2)});
    })
    .catch(erro=>{
      res.render("error",{error: erro, message:"Erro ao recuperar as plantas"})
    })
  
});

router.get('/:id', function(req, res, next) {

  axios.get("http://localhost:16000/contratos/" + req.params.id)
    .then(resposta=>{
      res.render('item', { title: 'Contrato ' + req.params.id ,item:resposta.data});
    })
    .catch(erro=>{
      res.render("error",{error: erro, message:"Erro ao recuperar as plantas"})
    })
  
});

module.exports = router;
