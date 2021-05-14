import Cliente from "../classes/Cliente.js";

const cliente = new Cliente();

export default {
  async index(req, res) {
    return res.json({
      text: "Birds home page",
    });
  },

  async create(req, res) {
    console.log(req.body);

    if (!cliente.validaTelefone(req.body.telefone)) {
      return res.json({
        sucess: false,
        msg: "Telefone Invalido",
      });
    } else if (!cliente.testeCPF(req.body.cpf)) {
      return res.json({
        sucess: false,
        msg: "CPF Invalido",
      });
    } else {
      return res.json({
        sucess: true,
      });
    }
  },
};
