import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity} from "typeorm";
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

  @Column()
  created!: Date

  @Column()
  updated!: Date
}