/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * this file will configure the setting of orm migration
 */
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  type: process.env.DB_CONNECTION || 'postgres',
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '1',
  database: process.env.DB_DATABASE || 'genesis-nft',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  subscribers: ['dist/**/*.subscriber{ .ts,.js}'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  factories: ['dist/database/factories/*.factory{.ts,.js}'],
  seeds: ['dist/database/seeders/*.seed{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    subscribersDir: 'src',
    migrationsDir: 'src/database/migrations',
  },
  logging: false,
};
