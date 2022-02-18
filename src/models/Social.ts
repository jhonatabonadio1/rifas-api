import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("social")
class Social {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    social_name: string;

    @Column()
    social_icon: string;

    @Column()
    social_background: string;

    @Column()
    social_color: string;

    @Column()
    social_url: string;

    @Column()
    active: boolean;

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

export { Social }
