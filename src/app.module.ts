import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // conexão com o banco de dados
    TypeOrmModule.forRoot({
      type: 'mysql', // tipo do bd
      host: 'localhost', // local do bd
      port: 3306, // porta do bd
      username: 'root', // usarname do bd
      password: 'root', // a senha do bd
      database: 'db_blogpessoal', // nome do bd
      entities: [],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
