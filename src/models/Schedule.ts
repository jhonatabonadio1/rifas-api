import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";

@Entity()
export class Schedule {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "prize_id" })
  @ManyToOne(() => Prize)
  prize: string;

  @Column()
  date: Date;

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
