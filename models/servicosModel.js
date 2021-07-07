const listaDeServicos = require("../database/listaServicos.json");
const { v4 } = require("uuid");
const fs = require("fs");

exports.retornarListaServicos = () => {
  return listaDeServicos;
};

exports.criarServico = (desc, preco) => {
  let id = v4();
  const novoServico = { id, desc, preco };
  listaDeServicos.push(novoServico);

  fs.writeFileSync(
    "./database/listaServicos.json",
    JSON.stringify(listaDeServicos)
  );

  return novoServico;
};
