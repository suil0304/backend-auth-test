import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
    constructor(private readonly __userService:UserService) {}

    @Post()
    create(@Body() createUserDto:CreateUserDto) {
        return this.__userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.__userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.__userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto) {
        return this.__userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.__userService.remove(+id);
    }
}
