import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entities";
import { TemaController } from "./controller/tema.controller";
import { TemaService } from "./services/tema.service";

@Module({ // registramos todas as dependências necessárias, como as Classes Entidade, Service e Controller, que fazem parte do módulo
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TemaService]
})
export class TemaModule {}