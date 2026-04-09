import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entities";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_postagem"}) // Cria uma tabela no banco de dados
export class Postagem{
    // ! a variavel vai ser utilizada

    @PrimaryGeneratedColumn() // Cria uma chave primária e auto_increment
    id!: number;

    @IsNotEmpty() // verifica se o campo está vazio
    @Column({length: 100, nullable: false})
    titulo!: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto!: string;

    @UpdateDateColumn()
    data!: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, { 
        onDelete: "CASCADE"
    })
    tema!: Tema

     
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario!: Usuario
 

}