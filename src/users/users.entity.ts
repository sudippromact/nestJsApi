import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true})
    password: string;

    @Column({ default: false })
    isAccountActivate: boolean;

    @Column()
    phoneNo: string;

    @CreateDateColumn()
    createdAt: Date;
}