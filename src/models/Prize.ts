import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Status } from "./Status";

@Entity("prizes")
class Prize {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    description: string;

    @Column()
    unique_price: number;

    @Column()
    minimum_sales: number;

    @Column()
    total_numbers: number;

    @JoinColumn({ name: "status_id" })
    @ManyToOne(() => Status)
    status: string;

    @Column()
    end_at: Date;

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

export { Prize }
