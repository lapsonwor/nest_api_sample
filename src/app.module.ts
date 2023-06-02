import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenesisModule } from './modules/genesis_nft/genesis.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `.env` });
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'genesis-nft',
      entities: ['dist/src/modules/**/*.entity.js'],
      // subscribers: ['dist/src/database/**/*.subscriber{ .ts,.js}'],
      // seeds: ['dist/src/database/seeders/*.seed{.ts,.js}'],
      migrations: ['dist/src/database/migrations/*.ts}'],
      synchronize: false,
      logging: false,
    }),
    GenesisModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
