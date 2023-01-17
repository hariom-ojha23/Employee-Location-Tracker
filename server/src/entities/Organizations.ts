import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Organizations extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
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