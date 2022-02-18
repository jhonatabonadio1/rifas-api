import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";
import { Purchase } from "./Purchase";

@Entity()
export class Order {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  purchase_id: string;

  @JoinColumn({ name: "purchase_id" })
  @ManyToOne(() => Purchase)
  purchase: Purchase;

  @Column()
  prize_id: string;

  @JoinColumn({ name: "prize_id" })
  @ManyToOne(() => Prize)
  prize: Prize;

  @Column()
  random_numbers: number;

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
