import { Injectable } from '@nestjs/common';
import { CreateAnimalMenuDto } from './dto/create-animal-menu.dto';
import { UpdateAnimalMenuDto } from './dto/update-animal-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalMenu } from './entities/animal-menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalMenuService {
  constructor(
    @InjectRepository(AnimalMenu)
    private menuRepo: Repository<AnimalMenu>,
  ) {}
  create(createAnimalMenuDto: CreateAnimalMenuDto) {
    return this.menuRepo.save(createAnimalMenuDto);
  }

  findAll() {
    const queryBuilder = this.menuRepo.createQueryBuilder('menu');
    queryBuilder.leftJoinAndSelect('menu.animals', 'animal');

    return queryBuilder.getMany();
  }

  findOne(id: number) {
    const queryBuilder = this.menuRepo.createQueryBuilder('menu');
    queryBuilder
      .leftJoinAndSelect('menu.animals', 'animal')
      .where({ id });
    return queryBuilder.getOne();
  }

  update(id: number, updateAnimalMenuDto: UpdateAnimalMenuDto) {
    return `This action updates a #${id} animalMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} animalMenu`;
  }
}
