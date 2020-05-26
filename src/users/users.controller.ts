import { Controller, Post, Body, Get, Param, Delete, UseGuards } from "@nestjs/common";
import { User } from "./users.entity";
import { UsersService } from "./users.service";
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/registration')
  create(@Body() createUserDto: User): Promise<User> {    
    return this.usersService.create(createUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('/users')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  findOne(@Param('id') id: string): Promise<User> {    
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('user/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}