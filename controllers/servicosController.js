const servicosModel = require('../models/servicosModel')

exports.compilarListaServicos = taxaDesconto => {
  const listaDeServicos = servicosModel.retornarListaServicos();

  return listaDeServicos.map(itemDeServico => ({
    ...itemDeServico,
    preco: itemDeServico.preco * (1 - taxaDesconto)
  }));
}

exports.criarServico = (desc, preco) => {
  servicosModel.criarServico(desc, preco);

  // res.redirect("/produtos/sucesso");
}