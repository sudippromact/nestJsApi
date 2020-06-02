import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';
import { AuthService } from '../auth.service';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy)
{

  constructor(private readonly authService: AuthService) {
    super({
      domain: process.env.AUTH0_DOMAIN_WITHOUT,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret : process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      callbackURL: 'http://localhost:3000/callback'
      
    })
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function): Promise<any> {


    console.log(accessToken);
    
  }
}