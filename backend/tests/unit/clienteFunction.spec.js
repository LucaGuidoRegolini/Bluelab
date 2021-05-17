const clienteFunction = require("../../src/util/clienteFunction");

describe("Verifica as funções de verificação do cliente", () => {
  it("deve ser capas de validar os telefones", () => {
    const respfalse1 = clienteFunction.validaTelefone("123456");
    const respfalse2 = clienteFunction.validaTelefone("1234567890123");
    const resptrue1 = clienteFunction.validaTelefone("(11)12345678");
    const resptrue2 = clienteFunction.validaTelefone("(11)123456789");
    expect(respfalse1).toBe(false);
    expect(respfalse2).toBe(false);
    expect(resptrue1).toBe(true);
    expect(resptrue2).toBe(true);
  });

  it("deve ser capas de validar os cpfs", () => {
    const respfalse1 = clienteFunction.validaCPF("11111111111");
    const respfalse2 = clienteFunction.validaCPF("76490983000");
    const respfalse3 = clienteFunction.validaCPF("53209325122");
    const resptrue1 = clienteFunction.validaCPF("38198534059");
    expect(respfalse1).toBe(false);
    expect(respfalse2).toBe(false);
    expect(respfalse3).toBe(false);
    expect(resptrue1).toBe(true);
  });

  it("deve ser capas de não encontrar o cliente", () => {
    const resp = clienteFunction.validaCPF("91353156010");
    expect(resp).toBe(true);
  });
});
