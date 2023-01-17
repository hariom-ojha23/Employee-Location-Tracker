import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Group } from "./Groups";

@Entity()
export class Admin extends BaseEntity  {
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

  @ManyToMany(() => Group, (group) => group.admins)
  @JoinTable()
  groups!: Group[]

  @Column()
  verified!: boolean

  @Column()
  created!: Date

  @Column()
  updated!: Date
}