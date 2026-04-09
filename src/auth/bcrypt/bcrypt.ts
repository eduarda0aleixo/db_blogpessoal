import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt{

    async criptografarSenha(senha: string): Promise<string>{
        
        let saltos: number = 10; // vai mexer a senha 10 vezes
        return await bcrypt.hash(senha, saltos);
    }

    async comprararSenha(senhaDigitada: string, senhaBanco: string): Promise<boolean>{
        return await bcrypt.compare(senhaDigitada, senhaBanco); // comparar senhas na hora de logar
    }
}