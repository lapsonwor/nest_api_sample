import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Genesis } from './entities/genesis.entity';

@Injectable()
export class GenesisRepository extends Repository<Genesis> {
  constructor(private dataSource: DataSource) {
    super(Genesis, dataSource.createEntityManager());
  }

  async getGenesisByTokenId(tokenId: number) {
    return this.createQueryBuilder('genesis')
      .leftJoinAndSelect('genesis.characterWeapon', 'characterWeapon')
      .where('token_id = :tokenId', {
        tokenId: tokenId,
      })
      .getOne();
  }
}
