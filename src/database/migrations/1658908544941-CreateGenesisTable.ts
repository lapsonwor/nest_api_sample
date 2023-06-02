import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGenesisTable1658908544941 implements MigrationInterface {
    name = "createGenesisTable1658908544941";
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE genesis (id serial NOT NULL, type varchar(255) NOT NULL, tier varchar(255) NOT NULL, character_weapon_id int NOT NULL, hp int NOT NULL, durability int NOT NULL, attack_range varchar(255) NULL, attack_type varchar(255) NULL, attack_speed varchar(255) NULL, damage int NULL, healing int NULL, critical_hit int NULL, element varchar(255) NULL, level int NULL, token_id int NOT NULL, created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (id))");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("DROP TABLE genesis");
    }

}
