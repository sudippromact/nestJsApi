import { Controller, Get, Post, Param, Body, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @Post('/auth/login')
  async login(@Body() req) {
    return this.appService.signInOAuth(req);
  }

  @Post('/registration')
  async registration(@Body() user){
    return this.appService.registerInOAuth(user);
  }
}
