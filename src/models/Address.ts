import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

import { User } from "./User";

@Entity()
export class Address {
  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "owner_id" })
  @ManyToOne(() => User)
  owner: string;

  @Column()
  cep: string;

  @Column()
  address_1: string;

  @Column()
  address_2: string;

  @Column()
  address_3: string;

  @Column()
  complement: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  reference_point: string;

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
