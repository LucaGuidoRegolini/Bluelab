const app = require("./app");
const connection = require("./database/conection");

async function start() {
  await connection.migrate.rollback();
  await connection.migrate.latest();

  app.listen(process.env.PORT || 3333);
}

start();
