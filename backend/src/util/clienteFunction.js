const connection = require("../database/conection");

module.exports = {
  validaCPF(cpf) {
    let Soma;
    let Resto;
    Soma = 0;
    if (/^(.)\1+$/.test(cpf)) return false;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  },

  validaTelefone(telefone) {
    if (telefone.length > 13) {
      return false;
    } else {
      const regra = /\(\d{2}\)\d{8,9}/g;
      return regra.test(telefone);
    }
  },

  async confereCliente(cpf) {
    const resultado = await connection("clientes").where("cpf", cpf);
    if (resultado.length == 0) {
      return false;
    } else {
      return true;
    }
  },
};
