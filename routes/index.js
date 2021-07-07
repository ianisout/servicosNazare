const express = require("express");
const router = express.Router();

const servicosController = require("../controllers/servicosController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/listaservicos", (req, res) => {
  const { taxaDesconto } = req.query;

  const listaServicosComDesconto =
    servicosController.compilarListaServicos(taxaDesconto);

  res.render("listaServicos", { listaServicosComDesconto });
});


router.get("/servicos/criar", (req, res) => {
  res.render("criarServicos");
})

router.post("/servicos/criar", (req, res) => {
  const { desc, preco } = req.body;

  const novoServico = servicosController.criarServico(desc, preco);

  res.redirect("/listaServicos?taxaDesconto=0");
});

module.exports = router;
