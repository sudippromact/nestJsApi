import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDTO } from './model/app.model.user';
import { UsersService } from './users/users.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService, private userService: UsersService) { }

  registerInOAuth(user: UserDTO) {


    // var auth0Strategy = new Auth0Strategy({
    //   domain: process.env.AUTH0_DOMAIN_WITHOUT,
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   email: user.Email,
    //   password: user.Password,
    //   connection: process.env.AUTH0_DB_CONNECTION_NAME,
    //   username: user.Username,
    //   name: user.Name
    //   //clientSecrect:'i9l998r6EQ-ywEk2I957OV50VDIDBaSdKC5NXy59Mhns8q-5hSkQP68qicFLD3Hq'
    // });

    // passport.use(auth0Strategy);


    var body = JSON.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      email: user.Email,
      password: user.Password,
      connection: process.env.AUTH0_DB_CONNECTION_NAME,
      username: user.Username,
      name: user.Name
    })



    return this.httpService.post(`${process.env.AUTH0_DOMAIN}dbconnections/signup`, body
      , {
        headers:
        {
          'Content-Type': 'application/json'
        }
      }).pipe(map((response) => {
        user.Auth0Id = response.data._id;
        this.userService.create(user);
        return response.data;
      }));

  }

  signInOAuth(req: UserDTO): Observable<any> {

    var s = JSON.stringify({
      grant_type: 'password',
      username: req.Email,
      password: req.Password,
      audience: 'https://demo-api.nest.com',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
    })

    return this.httpService.post(`${process.env.AUTH0_DOMAIN}oauth/token`, s
      , {
        headers:
        {
          'Content-Type': 'application/json'
        }
      }).pipe(map((response) => { return response.data }),
        catchError(e => { throw new HttpException(e.response.body, e.response.status) }
        ));

  }
}
