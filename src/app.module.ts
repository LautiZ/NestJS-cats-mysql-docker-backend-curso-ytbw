import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST_MYSQL,
      port: parseInt(process.env.PORT_MYSQL),
      username: process.env.USERNAME_MYSQL,
      password: process.env.PASSWORD_MYSQL,
      database: process.env.DATABASE_MYSQL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
console.log({
  HOST: process.env.HOST_MYSQL,
  PORT: process.env.PORT_MYSQL,
  USERNAME: process.env.USERNAME_MYSQL,
  PASSWORD: process.env.PASSWORD_MYSQL,
  DATABASE: process.env.DATABASE_MYSQL,
  JWT_SECRET: process.env.JWT_SECRET,
});
