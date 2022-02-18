import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePurchases1645150323632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "purchases",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "owner_id",
              type: "uuid"
            },
            {
              name: "totalValue",
              type: "varchar"
            },
            {
              name: "paymentMethod",
              type: "varchar"
            },
            {
              name: "installmentCount",
              type: "varchar"
            },
            {
              name: "paid",
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
          foreignKeys: [
            {
              name: "FKUserId",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["owner_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("purchases")
    }

}
