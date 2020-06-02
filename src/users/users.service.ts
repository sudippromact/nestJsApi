import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDTO } from 'src/model/app.model.user';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(userDto: UserDTO): Promise<User> {
    const user = new User();

    user.name = userDto.Name;
    user.authId = userDto.Auth0Id;
    user.email = userDto.Email;

    return this.usersRepository.save(user);

  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findUserByAuthId(id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { authId: id }} );
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username: username } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
