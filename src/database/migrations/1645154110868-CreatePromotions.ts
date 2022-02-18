import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePromotions1645154110868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "promotions",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "prize_id",
              type: "uuid"
            },
            {
              name: "number_of_quotes",
              type: "varchar"
            },
            {
              name: "price",
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
              name: "FKPrizeId",
              referencedTableName: "prizes",
              referencedColumnNames: ["id"],
              columnNames: ["prize_id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE",
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("promotions")
    }

}
