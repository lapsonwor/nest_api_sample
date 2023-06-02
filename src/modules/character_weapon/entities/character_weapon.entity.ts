import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Genesis } from 'src/modules/genesis_nft/entities/genesis.entity';

@Entity('character_weapon')
export class CharacterWeapon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, name: 'name' })
  name: string;

  @Column({ nullable: false, name: 'image' })
  image: string;

  @CreateDateColumn({
    name: 'created_at',
    default: Math.round(new Date().getTime() / 1000),
  })
  createdAt: Timestamp;

  @UpdateDateColumn({
    name: 'updated_at',
    default: Math.round(new Date().getTime() / 1000),
  })
  updatedAt: Timestamp;

  @OneToMany(() => Genesis, (genesis) => genesis.characterWeapon, {
    eager: false,
  })
  genesis: Genesis[];
}
