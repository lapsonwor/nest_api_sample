import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomErrorMessage } from 'src/common/constants/error-message';
import { Nft } from 'src/modules/nft/entities/nft.entity';
import { GenesisRepository } from './genesis.repository';

@Injectable()
export class GenesisService {
  constructor(
    @InjectRepository(GenesisRepository)
    private genesisRepository: GenesisRepository,
  ) {}

  async getMetaDataByTokenId(tokenId: number) {
    const result = await this.genesisRepository.getGenesisByTokenId(tokenId);
    if (result) {
      const metaData = new Nft();
      metaData.name = result.characterWeapon.name;
      metaData.image = result.characterWeapon.image;
      metaData.external_url = 'https://aimee.polkafantasy.com';
      metaData.attributes = [
        {
          trait_type: 'Level',
          value: result.level,
        },
      ];
      if (result.type) {
        metaData.attributes.push({
          trait_type: 'Type',
          value: result.type,
        });
      }
      if (result.tier) {
        metaData.attributes.push({
          trait_type: 'Tier',
          value: result.tier,
        });
      }
      if (result.hp || result.hp == 0) {
        metaData.attributes.push({
          trait_type: 'Hp',
          value: result.hp,
          display_type: 'number',
        });
      }
      if (result.durability || result.durability == 0) {
        metaData.attributes.push({
          trait_type: 'Durability',
          value: result.durability,
          display_type: 'number',
        });
      }
      if (result.attack_range) {
        metaData.attributes.push({
          trait_type: 'Attack Range',
          value: result.attack_range,
        });
      }
      if (result.attack_type) {
        metaData.attributes.push({
          trait_type: 'Attack Type',
          value: result.attack_type,
        });
      }
      if (result.attack_speed) {
        metaData.attributes.push({
          trait_type: 'Attack Speed',
          value: result.attack_speed,
        });
      }
      if (result.damage || result.damage == 0) {
        metaData.attributes.push({
          trait_type: 'Damage',
          value: result.damage,
          display_type: 'number',
        });
      }
      if (result.healing || result.healing == 0) {
        metaData.attributes.push({
          trait_type: 'Healing',
          value: result.healing,
          display_type: 'number',
        });
      }
      if (result.critical_hit || result.critical_hit == 0) {
        metaData.attributes.push({
          trait_type: 'Critical Hit',
          value: result.critical_hit,
          display_type: 'boost_percentage',
        });
      }
      if (result.element) {
        metaData.attributes.push({
          trait_type: 'Element',
          value: result.element,
        });
      }
      return metaData;
    } else {
      throw new NotFoundException(CustomErrorMessage['NFT.NOT_FOUND']);
    }
  }
}
