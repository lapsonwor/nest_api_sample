import { Module } from '@nestjs/common';
import { Genesis } from './entities/genesis.entity';
import { CharacterWeapon } from 'src/modules/character_weapon/entities/character_weapon.entity';
import { GenesisService } from './genesis.service';
import { GenesisController } from './genesis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenesisRepository } from './genesis.repository';

const getControllers = (): Array<any> => {
  return [GenesisController];
};

@Module({
  imports: [TypeOrmModule.forFeature([Genesis, CharacterWeapon])],
  controllers: getControllers(),
  providers: [GenesisService, GenesisRepository],
  exports: [GenesisService],
})
export class GenesisModule {}
