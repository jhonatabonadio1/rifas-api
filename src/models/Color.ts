import {Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("colors")
class Color {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    theme_name: string;

    @Column()
    header: string;

    @Column()
    footer: string;

    @Column()
    background: string;

    @Column()
    primary_buttons: string;

    @Column()
    secondary_buttons: string;

    @Column()
    panel_background: string;

    @Column()
    item_background: string;

    @Column()
    help_background: string;

    @Column()
    titles: string;

    @Column()
    subtitles: string;

    @Column()
    texts: string;

    @Column()
    toggle_button: string;

    @Column()
    toggle_background: string;

    @Column()
    toggle_links: string;

    @Column()
    toggle_icons: string;

    @Column()
    hot_sale_badge: string;

    @Column()
    low_demand_badge: string;

    @Column()
    price_badge: string;

    @Column()
    internal_price_badge: string;

    @Column()
    view_numbers: string;

    @Column()
    quantity_background: string;

    @Column()
    quantity_buttons: string;

    @Column()
    empty_prizes: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
      if(!this.id){
          this.id = uuid();
      }
  }


}

export { Color }
