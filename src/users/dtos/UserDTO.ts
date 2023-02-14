/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail } from "class-validator";

/* eslint-disable prettier/prettier */
export class UserDTO {
    id: number;
    @IsNotEmpty()
    username: string;

    age: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}

