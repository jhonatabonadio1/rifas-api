import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";

@Entity("images")
class Image {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    prize_id: string;

    @JoinColumn({ name: "prize_id" })
    @ManyToOne(() => Prize)
    prize: Prize;

    @Column()
    url: string;

    @Column()
    order: number;

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

export { Image }
