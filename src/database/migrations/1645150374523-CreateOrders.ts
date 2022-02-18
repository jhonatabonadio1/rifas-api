import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1645150374523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "purchase_id",
              type: "uuid"
            },
            {
              name: "prize_id",
              type: "uuid",
            },
            {
              name: "random_numbers",
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
          ],
          foreignKeys: [
            {
              name: "FKPurchaseId",
              referencedTableName: "purchases",
              referencedColumnNames: ["id"],
              columnNames: ["purchase_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            },
            {
              name: "FKPrizeId",
              referencedTableName: "prizes",
              referencedColumnNames: ["id"],
              columnNames: ["prize_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }

}
