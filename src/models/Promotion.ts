import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";

@Entity()
export class Promotion {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  prize_id: string;

  @JoinColumn({ name: "prize_id" })
  @ManyToOne(() => Prize)
  prize: Prize;

  @Column()
  number_of_quotes: number;

  @Column()
  price: number;

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
