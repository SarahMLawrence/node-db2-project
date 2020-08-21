
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments()
      table.text("VIN", 128).notNullable().unique()
      table.text("make", 128).notNullable()
      table.text("model", 128).notNullable()
      table.decimal("mileage",128).notNullable()
      table.text("transmission", 128)
      table.text("title",128)


  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
  
};