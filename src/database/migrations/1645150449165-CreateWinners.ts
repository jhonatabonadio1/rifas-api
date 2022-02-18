import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateWinners1645150449165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "winners",
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
              name: "prize_id",
              type: "uuid"
            },
            {
              name: "number_winner",
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
              name: "FKUserId",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["owner_id"],
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
      await queryRunner.dropTable("winners")
    }

}
