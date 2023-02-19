import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import { Groups } from "./Groups";

@Entity()
export class Admins extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  fullname!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  organization!: string

  @ManyToMany(() => Groups, (group) => group.admins)
  @JoinTable()
  groups!: Groups[]

  @Column()
  verified!: boolean

  @CreateDateColumn({ name: 'created', type: 'timestamp' })
  created!: Date

  @UpdateDateColumn({ name: 'updated', type: 'timestamp' })
  updated!: Date

  @DeleteDateColumn({ name: 'deleted' })
  deleted?: Date
}