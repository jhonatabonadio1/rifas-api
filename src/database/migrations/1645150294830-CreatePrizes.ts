import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePrizes1645150294830 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "prizes",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "title",
              type: "varchar"
            },
            {
              name: "subtitle",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "unique_price",
              type: "varchar"
            },
            {
              name: "minimum_sales",
              type: "varchar"
            },
            {
              name: "total_numbers",
              type: "varchar"
            },
            {
              name: "status_id",
              type: "integer"
            },
            {
              name: "end_at",
              type: "timestamp"
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
          foreignKeys: [
            {
              name: "FKStatusId",
              referencedTableName: "status",
              referencedColumnNames: ["id"],
              columnNames: ["status_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("prizes")
    }

}
