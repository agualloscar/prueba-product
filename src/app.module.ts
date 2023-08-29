import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './models/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
