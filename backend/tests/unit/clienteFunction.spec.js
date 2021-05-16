const clienteFunction = require("../../src/util/clienteFunction");

describe("Verifica o validador Telefone/celular", () => {
  it("deve ser capas de validar os telefone esta funcionando", () => {
    const respfalse1 = clienteFunction.validaTelefone("123456");
    const respfalse2 = clienteFunction.validaTelefone("1234567890123");
    const resptrue1 = clienteFunction.validaTelefone("(11)12345678");
    const resptrue2 = clienteFunction.validaTelefone("(11)123456789");
    expect(respfalse1).toBe(false);
    expect(respfalse2).toBe(false);
    expect(resptrue1).toBe(true);
    expect(resptrue2).toBe(true);
  });
});
