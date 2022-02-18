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
              name: "minimum_sales",
              type: "varchar"
            },
            {
              name: "total_numbers",
              type: "varchar"
            },
            {
              name: "status",
              type: "varchar"
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
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("prizes")
    }

}
