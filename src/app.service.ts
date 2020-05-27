import { Injectable, HttpService } from '@nestjs/common';
import { User } from './model/app.model.user';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { map } from 'rxjs/operators';
// var users: User[] = [{ Name: "Sudip", PhoneNo: "+918013604541" },
// { Name: "Sudip Sadhukhan", PhoneNo: "+91700354782" },{Name:"Jhon",PhoneNo:"+917113354782"}];
var querystring = require('querystring');

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) { }

  signInOAuth():Observable<any>{

    var s = JSON.stringify({
      grant_type: 'password',
      username: 'babai0204@gmail.com',
      password: 'P@ssw0rd',
      audience: 'https://demo-api.nest.com',
      client_id: '9YyKZX2C69usKgG04Fu79dvbNVzcAwq1',
      client_secret: 'i9l998r6EQ-ywEk2I957OV50VDIDBaSdKC5NXy59Mhns8q-5hSkQP68qicFLD3Hq',
    })

    console.log(s);
    try{
    return this.httpService.post('https://demo-nest.auth0.com/oauth/token', s
      , {
        headers:
        {
          'Content-Type': 'application/json'
        }
      }).pipe(map((response)=>{return response.data}));
    
    }catch(e){
      console.log(e);
      
    }
  }

  // getUsers(): User[] {
  //   return users
  // }

  // findUser(name: string): User {
  //   var user = users.find(x=>x.Name===name)
  //   return user
  // }

  // addUser(user:User):User[]{
  //   console.log(user);

  //   users.push(user)
  //   return users
  // }

  // removeUser(name:String):User[]{
  //   users = users.filter(x=>x.Name!==name)
  //   return users
  // }

  // updateUser(name:string,user:User):User[]{
  //   users = users.filter(x=>x.Name!==name);
  //   users.push(user);
  //   return users;
  // }

}
