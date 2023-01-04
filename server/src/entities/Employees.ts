import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class employees extends BaseEntity {

  @PrimaryColumn()
  id!: string

  @Column()
  fullname!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  employerid!: string

  @Column()
  groups!: string[]

  @Column()
  hotspots!: string[]

  @Column()
  status!: string
}