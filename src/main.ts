
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as AWS from 'aws-sdk';

AWS.config.update({
  region: "eu-north-1",
  accessKeyId: "AKIAWF2IOII63NXF4GNJ",
  secretAccessKey: "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"
})
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true});
  
  const config = new DocumentBuilder()
    .setTitle('Form Example')
    .setDescription('The Forms API description')
    .setVersion('1.0')
    .addTag('Form')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3335);
}
bootstrap();
