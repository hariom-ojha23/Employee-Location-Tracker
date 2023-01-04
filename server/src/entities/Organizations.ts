import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class organizations extends BaseEntity {

  @PrimaryColumn()
  id!: string

  @Column()
  fullname!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  orgname!: string

  @Column()
  orglogo!: string

  @Column()
  created!: Date

  @Column()
  updated!: Date
}