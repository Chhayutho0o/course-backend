/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("chapters", table => {
    table.increments("id").primary(),
      table.string("name"),
      table.string("summary"),
      table.integer("course_id")
        .references("id")
        .inTable("courses")
        .onDelete("cascade"),
      table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("chapters")
};
