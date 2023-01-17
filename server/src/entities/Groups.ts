import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Employee } from "./Employees";
import { Hotspot } from "./Hotspots";
import { Admin } from "./Admins";

@Entity()
export class Group extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  groupname!: string

  @Column()
  organization!: string

  @ManyToMany(() => Employee, (employee) => employee.groups, {
    cascade: true,
  })
  @JoinTable()
  employees!: Employee[]

  @ManyToMany(() => Hotspot, (hotspot) => hotspot.groups, {
    cascade: true,
  })
  @JoinTable()
  hotspots!: string

  @ManyToMany(() => Admin, (admin) => admin.groups, {
    cascade: true,
  })
  @JoinTable()
  admins!: string

  @Column('simple-json')
  schedule!: {starttime: Date, endtime: Date}

  @Column()
  created!: Date

  @Column()
  updated!: Date
}