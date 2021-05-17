const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/conection");

const cpf = "91353156010";

describe("Verifica os metodos de clienteControler", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it("deve ser capas de criar um cliente", async () => {
    const response = await request(app)
      .post("/")
      .send({
        cpf: `${cpf}`,
        nome: "Joge",
        sobrenome: "Antonio",
        telefone: "(11)944422185",
      });
    expect(response.body.sucess).toBe(true);
  });

  it("deve ser capas de listar os clientes", async () => {
    const response = await await request(app).get("/");
    expect(response.body.sucess).toBe(true);
  });

  it("deve ser capas de selecionar um cliente", async () => {
    const response = await await request(app).get(`/${cpf}`);
    expect(response.body.sucess).toBe(true);
  });

  it("deve ser capas de alterar um cliente", async () => {
    const response = await request(app).put(`/${cpf}`).send({
      nome: "Joge",
      sobrenome: "Antonio",
      telefone: "(11)94442218",
    });
    expect(response.body.sucess).toBe(true);
  });

  it("deve ser capas de excluir um cliente", async () => {
    const response = await await request(app).del(`/${cpf}`);
    expect(response.body.sucess).toBe(true);
  });
});
