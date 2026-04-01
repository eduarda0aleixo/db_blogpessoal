import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() // classe de serviço, pode ser injetada em outros lugares
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); // chega no banco de dados desse jeito: select * from tb_postagem;
    }
}