exports.up = (knex) =>
  knex.schema.createTable("urls", (table) => {
    table.string("id", 10).unique().notNullable();
    table.string("url", 150).notNullable();
  });

exports.down = (knex) => knex.schema.dropTable("urls");
