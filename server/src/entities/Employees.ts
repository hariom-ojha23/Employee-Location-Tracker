import {Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, BaseEntity } from "typeorm"
import { Group } from "./Groups"

@Entity()
export class Employee extends BaseEntity  {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  fullname!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  phonenumber!: string

  @Column()
  organization!: string

  @ManyToMany(() => Group, (group) => group.employees)
  @JoinTable()
  groups!: Group[]

  @Column()
  trackingstatus!: string

  @Column()
  verified!: boolean

  @Column()
  created!: Date

  @Column()
  updated!: Date
}