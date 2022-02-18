import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSocial1645152007523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "social",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "social_name",
              type: "varchar"
            },
            {
              name: "social_icon",
              type: "varchar"
            },
            {
              name: "social_background",
              type: "varchar"
            },
            {
              name: "social_color",
              type: "varchar"
            },
            {
              name: "social_url",
              type: "varchar"
            },
            {
              name: "active",
              type: "boolean"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()"
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("social")
    }

}
