const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/conection");

describe("Verifica os metodos de clienteControler", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it("deve ser capas de criar um cliente", async () => {
    const response = await request(app).post("/").send({
      cpf: "91353156010",
      nome: "Joge",
      sobrenome: "Antonio",
      telefone: "(11)944422185",
    });
    expect(response.body.sucess).toBe(true);
    console.log(response.body);
  });
});
