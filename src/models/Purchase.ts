import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { User } from "./User";

@Entity()
export class Purchase {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "owner_id" })
  @ManyToOne(() => User)
  owner: string;

  @Column()
  totalValue: number;

  @Column()
  paymentMethod: string;

  @Column()
  installmentCount: number;

  @Column()
  paid: boolean;

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
