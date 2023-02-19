import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
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

  @CreateDateColumn({ name: 'created', type: 'timestamp' })
  created!: Date

  @UpdateDateColumn({ name: 'updated', type: 'timestamp' })
  updated!: Date

  @DeleteDateColumn({ name: 'deleted' })
  deleted?: Date
}