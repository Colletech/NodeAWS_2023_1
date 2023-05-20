import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("customers")
export class Customer {

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    phone: String;
}