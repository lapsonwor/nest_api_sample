import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'genesis-nft',
  entities: ['src/**/*.entity{ .ts,.js}'],
  subscribers: ['src/**/*.subscriber{ .ts,.js}'],
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  logging: false,
});
