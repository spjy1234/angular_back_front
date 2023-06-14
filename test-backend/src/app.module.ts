import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBase } from './dataBase';
import { AnimalModule } from './animal/animal.module';
import { AnimalMenuModule } from './animal-menu/animal-menu.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataBase), PersonModule, AnimalModule, AnimalMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
