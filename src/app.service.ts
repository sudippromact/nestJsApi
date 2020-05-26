import { Injectable } from '@nestjs/common';
import { User } from './model/app.model.user';

// var users: User[] = [{ Name: "Sudip", PhoneNo: "+918013604541" },
// { Name: "Sudip Sadhukhan", PhoneNo: "+91700354782" },{Name:"Jhon",PhoneNo:"+917113354782"}];

@Injectable()
export class AppService {

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
