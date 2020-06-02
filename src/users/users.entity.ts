import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: string;

    @Column({ nullable: true })
    username: string;
    
    @Column({ default: false })
    isAccountActivate: boolean;

    @Column({nullable:true})
    phoneNo: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    authId:String;

    @Column()
    email:string;
}