import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import {User} from './app.model.User';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers():User[]{
    return this.appService.getUsers()
  }

  @Get('/user/:name')
  findUser(@Param('name')name:string):User{
    return this.appService.findUser(name)
  }

  @Post('/user')
  addUser(@Body()user:User):User[]{
    return this.appService.addUser(user)
  }

  @Delete('/user/:name')
  remove(@Param('name') name: string):User[] {
    return this.appService.removeUser(name);
  }


}
