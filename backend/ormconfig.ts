import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'frosh2022',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;
