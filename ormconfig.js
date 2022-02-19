module.exports = {
  database: "./src/database/database.sql",
  type: "sqlite",
  /**
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "postgres",
  extra: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  },**/
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/models/*.ts"],
  "seeds": ['src/database/seeds/**/*.ts'],
  "factories": ['src/database/factories/**/*.ts'],
  "cli": {
      "migrationsDir": "src/database/migrations",
      "entitiesDir": "src/models"
  }
}
