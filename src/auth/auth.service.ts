import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,private jwtService: JwtService) {}
  
    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findUserByUsername(username);
      
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
        const payload = { username: user.username };
        return {
          AccessToken: this.jwtService.sign(payload),
        };
      } 
  }