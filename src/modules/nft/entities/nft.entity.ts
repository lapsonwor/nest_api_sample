import { nft_attribute } from './attribute.entity';

export class Nft {
  name: string;
  image: string;
  animation_url?: string;
  description?: string;
  external_url: string;
  attributes: nft_attribute[];
}
