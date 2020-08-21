exports.seed = async function (knex) {
  // clear out all the rows in the table and reset it
  await knex("cars").truncate();

  //populate the table with some static test data
  // Inserts seed entries
  return knex("cars").insert([
    {
      VIN: 1234546,
      make: "Honda",
      model: "Accord",
      mileage: 10000,
      transmission: "Automatic",
      title: "clean",
    },
    {
      VIN: 7891011,
      make: "Nissian",
      model: "Rogue",
      mileage: 81401,
      transmission: "Automatic",
      title: "Brand New",
    },
  ]);
};

//VIN, Make, model, mileage, transmission type, status of title
