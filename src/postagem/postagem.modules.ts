import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";
import { TemaModule } from "../tema/tema.module";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService], // Classes que contêm lógica de negócio e podem ser injetadas em outros lugares
    controllers: [PostagemController], // Classes que recebem as requisições HTTP
    exports: [TypeOrmModule] // O que este módulo disponibiliza para outros módulos usarem
})
export class PostagemModule {}