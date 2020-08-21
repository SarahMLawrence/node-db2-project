module.exports = {
  client: "sqlite3", // specifiy the DBMS
  useNullAsDefault: true, // a option/flag that's required for SQLite
  connection: {
    filename: "./data/car-dealer.db3", // location of our db file
  },
};
