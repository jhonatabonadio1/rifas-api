import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { Prize } from "./Prize";
import { User } from "./User";

@Entity()
export class Winner {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  owner_id: string;

  @JoinColumn({ name: "owner_id" })
  @ManyToOne(() => User)
  owner: User;

  @Column()
  prize_id: string;

  @JoinColumn({ name: "prize_id" })
  @ManyToOne(() => Prize)
  prize: Prize;

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
