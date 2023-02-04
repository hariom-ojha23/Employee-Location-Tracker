import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, ManyToOne} from "typeorm";
import { Groups } from "./Groups";

@Entity()
export class Hotspots extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  hotspotname!: string
  
  @Column()
  organization!: string

  @ManyToMany(() => Groups, (group) => group.hotspots)
  @JoinTable()
  groups!: Groups[]

  @Column('simple-json')
  location!: { latitude: number, longitude: number, address: string }

  @Column()
  created!: Date

  @Column()
  updated!: Date
}