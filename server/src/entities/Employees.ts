import {Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, BaseEntity } from "typeorm"
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

  @Column()
  created!: Date

  @Column()
  updated!: Date
}