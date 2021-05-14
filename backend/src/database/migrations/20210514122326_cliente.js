exports.up = function (knex) {
  return knex.schema.createTable("clientes", function (tabela) {
    tabela.string("cpf", 11).primary();
    tabela.string("nome").notNullable();
    tabela.string("sobrenome").notNullable();
    tabela.string("telefone");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clientes");
};
