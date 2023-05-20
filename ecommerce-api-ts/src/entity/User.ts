import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";
import { IsEmail } from "class-validator";

@Entity("users")
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @IsEmail({}, { message: "El formato del correo electrónico es inválido" })
  email: string;
}
