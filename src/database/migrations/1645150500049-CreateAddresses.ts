import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddresses1645150500049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "addresses",
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
              name: "cep",
              type: "varchar"
            },
            {
              name: "address_1",
              type: "varchar"
            },
            {
              name: "address_2",
              type: "varchar"
            },
            {
              name: "address_3",
              type: "varchar"
            },
            {
              name: "complement",
              type: "varchar"
            },
            {
              name: "state",
              type: "varchar"
            },
            {
              name: "city",
              type: "varchar"
            },
            {
              name: "reference_point",
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
              onDelete: "CASCADE",
              onUpdate: "CASCADE",
            }
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("addresses")
    }

}
