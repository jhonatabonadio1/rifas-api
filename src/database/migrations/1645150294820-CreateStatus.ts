import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStatus1645185530249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "status",
          columns: [
            {
              name: "id",
              type: "integer",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar"
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
      await queryRunner.dropTable("status")
    }

}
