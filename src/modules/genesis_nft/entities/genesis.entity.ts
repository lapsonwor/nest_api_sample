import { CharacterWeapon } from '../../character_weapon/entities/character_weapon.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('genesis')
export class Genesis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: 0, name: 'character_weapon_id' })
  characterWeaponId: number;

  @Column({ nullable: false, name: 'type' })
  type: string;

  @Column({ nullable: false, name: 'tier' })
  tier: string;

  @Column({ nullable: false, name: 'hp' })
  hp: number;

  @Column({ nullable: false, name: 'durability' })
  durability: number;

  @Column({ nullable: true, name: 'attack_range' })
  attack_range: string;

  @Column({ nullable: true, name: 'attack_type' })
  attack_type: string;

  @Column({ nullable: true, name: 'attack_speed' })
  attack_speed: string;

  @Column({ nullable: true, name: 'damage' })
  damage: number;

  @Column({ nullable: true, name: 'healing' })
  healing: number;

  @Column({ nullable: true, name: 'critical_hit' })
  critical_hit: number;

  @Column({ nullable: true, name: 'element' })
  element: string;

  @Column({ nullable: false, name: 'level' })
  level: number;

  @Column({ nullable: false, name: 'token_id' })
  tokenId: number;

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

  @ManyToOne(
    () => CharacterWeapon,
    (characterWeapon) => characterWeapon.genesis,
    {
      cascade: true,
      eager: true,
    },
  )
  @JoinColumn({ name: 'character_weapon_id' })
  characterWeapon: CharacterWeapon;
}
