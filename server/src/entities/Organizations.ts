import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

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

  @CreateDateColumn({ name: 'created', type: 'timestamp' })
  created!: Date

  @UpdateDateColumn({ name: 'updated', type: 'timestamp' })
  updated!: Date

  @DeleteDateColumn({ name: 'deleted' })
  deleted?: Date
}