module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Child_vaccination',
    synchronize: true,
    logging: true,
    entities: ['src/models/**/*.js'],
    migrations: ['src/migrations/**/*.js'],
    subscribers: ['src/subscribers/**/*.js'],
    cli: {
      entitiesDir: 'src/models',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers',
    },
  };
  