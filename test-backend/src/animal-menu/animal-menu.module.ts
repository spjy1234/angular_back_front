import { Module } from '@nestjs/common';
import { AnimalMenuService } from './animal-menu.service';
import { AnimalMenuController } from './animal-menu.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnimalMenu} from "./entities/animal-menu.entity";

@Module({
  controllers: [AnimalMenuController],
  providers: [AnimalMenuService],
  imports:[TypeOrmModule.forFeature([AnimalMenu])]
})
export class AnimalMenuModule {}
