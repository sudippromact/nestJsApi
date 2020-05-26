import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(userDto: User): Promise<User> {
    const user = new User();

    user.name = userDto.name;
    user.phoneNo = userDto.phoneNo;
    user.username = userDto.username;
    user.password = userDto.password;

    return this.usersRepository.save(user);

  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username: username } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
