import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCharacterWeaponTable1658908569208 implements MigrationInterface {
    name = "createCharacterWeaponTable1658908569208";
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE character_weapon (id serial NOT NULL, name varchar(255) NOT NULL, image varchar(255) NOT NULL, created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(6),PRIMARY KEY (id))");
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("DROP TABLE character_weapon");
    }

}
