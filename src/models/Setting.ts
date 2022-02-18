import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("settings")
class Setting {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    site_name: string;

    @Column()
    site_title: string;

    @Column()
    site_description: string;

    @Column()
    logo_url: string;

    @Column()
    favicon_url: string;

    @Column()
    maintence: boolean;

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

export { Setting }
