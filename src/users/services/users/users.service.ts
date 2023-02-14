/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos/UserDTO';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'Daneker',
            age: 17,
            email: 'kkraken2005@gmail.com',
        },
        {
            id: 2,
            name: 'Ermek',
            age: 18,
            email: 'ermek2005@gmail.com',
        },
        {
            id: 3,
            name: 'Dana',
            age: 18,
            email: 'dana@gmail.com',
        }
    ];
    getAllUsers() {
        return this.users;
    }

    addUser(user: UserDTO) {
        this.users.push({ id: user.id, name: user.username, age: user.age, email: user.email });
    }

    getUserById(id: number) {
        return this.users.filter(user => user.id === id);
    }

    deleteUserById(id: number) {
        this.users = this.users.filter(user => user.id !== id);
    }

    updateUser(id: number, name: string, age: number, email: string) {
        this.deleteUserById(id);
        this.users.push({ id: id, name: name, age: age, email: email });
    }

}
