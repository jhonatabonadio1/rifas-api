import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";
import { User } from "./User";

@Entity()
export class Winners {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "owner_id" })
  @ManyToOne(() => User)
  owner: string;

  @JoinColumn({ name: "prize_id" })
  @ManyToOne(() => Prize)
  prize: string;

  @Column()
  number_winner: number;

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
