const cliente = require("../util/clienteFunction");
const connection = require("../database/conection");

module.exports = {
  async index(req, res) {
    const [count] = await connection("clientes").count();
    const { page = 1, total = count["count(*)"] } = req.query;

    const clientes = await connection("clientes")
      .limit(total)
      .offset((page - 1) * total)
      .select("*");

    res.header("X-Total-Count", count["count(*)"]);
    return res.status(202).json({
      sucess: true,
      clientes,
    });
  },

  async select(req, res) {
    const { id } = req.params;
    const cliente = await connection("clientes").where("cpf", id);
    if (cliente.length == 0) {
      return res.status(400).json({
        sucess: false,
        msg: "CPF invalido",
      });
    } else {
      return res.json({
        sucess: true,
        cliente,
      });
    }
  },

  async create(req, res) {
    const { nome, sobrenome = "", telefone, cpf } = req.body;

    const resultado = await cliente.confereCliente(cpf);

    if (resultado) {
      return res.status(409).json({
        sucess: false,
        msg: "CPF ja cadastrado",
      });
    } else if (nome == null || nome == "") {
      return res.status(400).json({
        sucess: false,
        msg: "Nome em branco",
      });
    } else if (!cliente.validaTelefone(telefone)) {
      return res.status(400).json({
        sucess: false,
        msg: "Telefone Invalido",
      });
    } else if (!cliente.validaCPF(cpf)) {
      return res.status(400).json({
        sucess: false,
        msg: "CPF Invalido",
      });
    } else {
      await connection("clientes").insert({
        cpf,
        nome,
        sobrenome,
        telefone,
      });

      return res.json({
        sucess: true,
      });
    }
  },

  async update(req, res) {
    const { id } = await req.params;
    const { nome, sobrenome, telefone } = req.body;
    const resultado = await cliente.confereCliente(id);

    if (!resultado) {
      return res.status(409).json({
        sucess: false,
        msg: "CPF não encontrado",
      });
    } else if (!cliente.validaTelefone(telefone)) {
      return res.status(400).json({
        sucess: false,
        msg: "Telefone Invalido",
      });
    } else {
      await connection("clientes")
        .update({
          nome,
          sobrenome,
          telefone,
        })
        .where("cpf", id);

      return res.json({
        sucess: true,
      });
    }
  },

  async del(req, res) {
    const { id } = req.params;
    const resposta = await cliente.confereCliente(id);
    if (resposta) {
      await connection("clientes").where("cpf", id).delete();
      return res.json({
        sucess: true,
      });
    } else {
      return res.status(400).json({
        sucess: false,
        msg: "Cliente não existe",
      });
    }
  },
};
