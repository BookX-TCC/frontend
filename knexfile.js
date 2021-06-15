module.exports = {

  development: {
    client: "sqlite3",
    connection: { filename: `${__dirname}/src/db/bookx.db` },
    useNullAsDefault: true,
    migrations: { directory: `${__dirname}/src/db/migrations` },
    seeds: { directory: `${__dirname}/src/db/seeds`}
  }
};
