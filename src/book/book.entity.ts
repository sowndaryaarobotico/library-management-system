import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author:string;

    @Column()
    subject: string;

    @Column({ default: true })
    available: boolean;
    
}