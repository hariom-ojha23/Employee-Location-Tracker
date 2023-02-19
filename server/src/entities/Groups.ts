import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { Employees } from "./Employees";
import { Hotspots } from "./Hotspots";
import { Admins } from "./Admins";

@Entity()
export class Groups extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  groupname!: string

  @Column()
  organization!: string

  @ManyToMany(() => Employees, (employee) => employee.groups, {
    cascade: true,
  })
  @JoinTable()
  employees!: Employees[]

  @ManyToMany(() => Hotspots, (hotspot) => hotspot.groups, {
    cascade: true,
  })
  @JoinTable()
  hotspots!: Hotspots[]

  @ManyToMany(() => Admins, (admin) => admin.groups, {
    cascade: true,
  })
  @JoinTable()
  admins!: Admins[]

  @Column('simple-json')
  schedule!: {starttime: Date, endtime: Date}

  @CreateDateColumn({ name: 'created', type: 'timestamp' })
  created!: Date

  @UpdateDateColumn({ name: 'updated', type: 'timestamp' })
  updated!: Date

  @DeleteDateColumn({ name: 'deleted' })
  deleted?: Date
}