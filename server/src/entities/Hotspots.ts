import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Group } from "./Groups";

@Entity()
export class Hotspot extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  hotspotname!: string

  @Column()
  organization!: string

  @ManyToMany(() => Group, (group) => group.hotspots)
  @JoinTable()
  groups!: Group[]

  @Column('simple-json')
  location!: { latitude: number, longitude: number, address: string }

  @Column()
  created!: Date

  @Column()
  updated!: Date
}