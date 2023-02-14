/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import {
    Query,
    UsePipes
} from '@nestjs/common/decorators';
import {
    ParseIntPipe,
    ValidationPipe
} from '@nestjs/common/pipes';
import { UserDTO } from 'src/users/dtos/UserDTO';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: UserDTO) {
        this.userService.addUser(userData);
        return {};
    }

    @Get('update/:id')
    updateUser(@Query('name') name: string, @Query('age') age: number, @Query('email') email: string, @Param('id', ParseIntPipe) id: number) {
        this.userService.updateUser(id, name, age, email);
        return this.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = null;

        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        return user;
    }


    @Get('delete/:id')
    deleteUserById(@Param('id', ParseIntPipe) id: number) {
        this.userService.deleteUserById(id);
        return this.userService.getAllUsers();
    }


}
