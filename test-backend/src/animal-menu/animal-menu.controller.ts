import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalMenuService } from './animal-menu.service';
import { CreateAnimalMenuDto } from './dto/create-animal-menu.dto';
import { UpdateAnimalMenuDto } from './dto/update-animal-menu.dto';

@Controller('animal-menu')
export class AnimalMenuController {
  constructor(private readonly animalMenuService: AnimalMenuService) {}

  @Post()
  create(@Body() createAnimalMenuDto: CreateAnimalMenuDto) {
    return this.animalMenuService.create(createAnimalMenuDto);
  }

  @Get()
  findAll() {
    return this.animalMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalMenuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimalMenuDto: UpdateAnimalMenuDto,
  ) {
    return this.animalMenuService.update(+id, updateAnimalMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalMenuService.remove(+id);
  }
}
