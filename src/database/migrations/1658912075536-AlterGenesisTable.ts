import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterGenesisTable1658912075536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE genesis ADD CONSTRAINT FK_Character_Weapon FOREIGN KEY (character_weapon_id) REFERENCES character_weapon(id) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        "ALTER TABLE genesis DROP CONSTRAINT FK_Character_Weapon",
      );
    }

}
