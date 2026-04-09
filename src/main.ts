import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // mudar a variavel de ambiente . TZ (fuso horário)
  process.env.TZ = '-03:00';

  // configuração de validação de dados de entrada
  app.useGlobalPipes(new ValidationPipe()); // os filtros são validados pelo Validation

  app.enableCors() // configuração de cors para permitir requisições de outras origens

  // dentro da aplicação, estou criando uma porta de acesso = 4000
  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, configuração da porta do servidor
}
bootstrap();
