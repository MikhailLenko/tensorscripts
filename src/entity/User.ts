import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    constructor(firstName?: string, lastName?: string, age?: number, id?: number) {
    	this.id = id || null;
    	this.firstName = firstName || null;
    	this.lastName = lastName || null;
    	this.age = age || null;
    }
}