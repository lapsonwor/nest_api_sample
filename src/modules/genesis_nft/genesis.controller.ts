import { Controller, Get, Param } from '@nestjs/common';
import { GenesisService } from './genesis.service';

@Controller('genesis')
export class GenesisController {
  constructor(private readonly genesisService: GenesisService) {}

  @Get(':tokenId')
  async getMetaDataByTokenId_ori(@Param('tokenId') tokenId: number) {
    return this.genesisService.getMetaDataByTokenId(tokenId);
  }

  @Get(':tokenId/:trait')
  async getMetaDataByTokenId(@Param('tokenId') tokenId: number) {
    return this.genesisService.getMetaDataByTokenId(tokenId);
  }
}
