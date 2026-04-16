import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Eduarda Silva Aleixo","https://github.com/eduarda0aleixo","eduarda.aleixo07@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // mudar a variavel de ambiente . TZ (fuso horário)
  process.env.TZ = '-03:00';

  // configuração de validação de dados de entrada
  app.useGlobalPipes(new ValidationPipe()); // os filtros são validados pelo Validation

  app.enableCors() // configuração de cors para permitir requisições de outras origens

  // dentro da aplicação, estou criando uma porta de acesso = 4000
  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, configuração da porta do servidor
}
bootstrap();
