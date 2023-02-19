import {Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Groups } from "./Groups"

@Entity()
export class Employees extends BaseEntity  {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  fullname!: string

  @Column()
  email!: string

  @Column()
  phonenumber!: string

  @Column()
  organization!: string

  @ManyToMany(() => Groups, (group) => group.employees)
  @JoinTable()
  groups!: Groups[]

  @Column()
  trackingstatus!: string

  @CreateDateColumn({ name: 'created', type: 'timestamp' })
  created!: Date

  @UpdateDateColumn({ name: 'updated', type: 'timestamp' })
  updated!: Date

  @DeleteDateColumn({ name: 'deleted' })
  deleted?: Date
}