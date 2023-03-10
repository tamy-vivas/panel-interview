import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { Public } from '../auth/public.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Public()
    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    //@UseGuards(JwtAuthGuard) //Not need because globally JwtAuthGuard is implemented in user.module.ts
    @Post()
    createUser(@Body() body: CreateUserDto): Promise<User> {
        return this.usersService.createUser(body);
    }

    @Get(':id')
    getUser(@Param('id') id: string): Promise<User> {
        return this.usersService.findById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<any> {
        return this.usersService.deleteById(id);
    }
}
