import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateColors1645151997913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "colors",
          columns: [
            {
              name: "header",
              type: "varchar",
            },
            {
              name: "footer",
              type: "varchar"
            },
            {
              name: "background",
              type: "varchar"
            },
            {
              name: "primary_buttons",
              type: "varchar"
            },
            {
              name: "secondary_buttons",
              type: "varchar"
            },
            {
              name: "panel_background",
              type: "varchar"
            },
            {
              name: "item_background",
              type: "varchar"
            },
            {
              name: "help_background",
              type: "varchar"
            },
            {
              name: "titles",
              type: "varchar"
            },
            {
              name: "descriptions",
              type: "varchar"
            },
            {
              name: "texts",
              type: "varchar"
            },
            {
              name: "toggle_button",
              type: "varchar"
            },
            {
              name: "toggle_background",
              type: "varchar"
            },
            {
              name: "toggle_links",
              type: "varchar"
            },
            {
              name: "toggle_icons",
              type: "varchar"
            },
            {
              name: "hot_sale_badge",
              type: "varchar"
            },
            {
              name: "low_demand_badge",
              type: "varchar"
            },
            {
              name: "price_badge",
              type: "varchar"
            },
            {
              name: "internal_price_badge",
              type: "varchar"
            },
            {
              name: "view_numbers",
              type: "varchar"
            },
            {
              name: "quantity_background",
              type: "varchar"
            },
            {
              name: "quantity_buttons",
              type: "varchar"
            },
            {
              name: "empty_prizes",
              type: "varchar"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable("colors")
    }

}
