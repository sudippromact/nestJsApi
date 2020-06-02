import { Controller, Post, Body, Get, Param, Delete, UseGuards, Request } from "@nestjs/common";
import { User } from "./users.entity";
import {UserDTO} from "../model/app.model.user";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/strategy/jwt-auth.guard";
import * as dotenv from 'dotenv';

dotenv.config();

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('/users')
  findAll(@Request() req:UserDTO): Promise<User[]> {    
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  findOne(@Request() req): Promise<User> {
    return this.usersService.findUserByAuthId(req.user.sub.split("|").pop());
  }

  @UseGuards(JwtAuthGuard)
  @Delete('user/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}