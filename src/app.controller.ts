import { Controller, Get, Post, Param, Body, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/strategy/jwt-auth.guard';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}


  // @Put('/user/:name')
  // updateUser(@Param('name') name: string, @Body() user: User) {
  //   return this.appService.updateUser(name,user);
  // }

  //@UseGuards(JwtAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.appService.signInOAuth();
    //return this.authService.login(req.user);
  }
}
