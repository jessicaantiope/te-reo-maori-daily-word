
exports.up = function(knex, Promise) {
  return knex.schema.createTable('words', table => {
    table.increments('id')
    table.string('maori_word')
    table.string('english_word')
    table.string('example')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words')
};
