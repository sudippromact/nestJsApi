import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersController } from './users/users.controller';
import { Auth0Strategy } from './auth/strategy/auth0.strategy';

@Module({
  imports: [AuthModule, UsersModule, HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'password',
      database: 'new',
      synchronize: true,
      autoLoadEntities: true,
    }),],
  controllers: [AppController, UsersController],
  providers: [AppService,Auth0Strategy],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
