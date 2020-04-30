
exports.up = function(knex) {
  return knex.schema
    .createTable("hobbits", table => {
        table.increments()
        table.string("name", 128)
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("hobbits")
};
