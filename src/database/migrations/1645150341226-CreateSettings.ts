import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGlobalSettings1645150341226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "settings",
          columns: [
            {
              name: "site_name",
              type: "varchar",
            },
            {
              name: "site_title",
              type: "varchar"
            },
            {
              name: "site_description",
              type: "varchar",
            },
            {
              name: "logo_url",
              type: "varchar"
            },
            {
              name: "favicon_url",
              type: "varchar"
            },
            {
              name: "maintence",
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
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("settings")
    }

}
