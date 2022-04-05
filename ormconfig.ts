// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config({
  path: join(__dirname, '.env'),
});

const connConfig = {
  host: process.env.DB_HOST_SEEDER,
  port: Number(process.env.DB_PORT_SEEDER),
  ssl: false,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = {
  type: 'postgres',
  entities: ['dist/src/quiz/entities/*.entity.js'],
  synchronize: true,
  migrations: ['src/_database/_migrations/*{.js,.ts}'],
  subscribers: [],
  cli: {
    migrationsDir: 'src/_database/_migrations',
  },
  ...connConfig,
};
