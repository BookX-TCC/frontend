
exports.up = knex => knex.schema.createTable("teste", table => {
  table.increments("id");
  table.text("nome").notNullable();
});

exports.down = knex => knex.schema.dropTable("teste");
