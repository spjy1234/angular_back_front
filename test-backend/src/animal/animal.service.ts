import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepo: Repository<Animal>,
  ) {}
  create(createAnimalDto: CreateAnimalDto) {
    return this.animalRepo.save(createAnimalDto);
  }

  findAll() {
    return this.animalRepo.find({ loadRelationIds: true });
  }

  async findOne(id: number) {
    return await this.animalRepo.findOne({ where: { id } });
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalRepo.findOne({ where: { id } });
    for (const key in updateAnimalDto) {
      if (key in animal) {
        animal[key] = updateAnimalDto[key];
      }
    }
    return this.animalRepo.save(animal);
  }

  async remove(id: number) {
    const animal = await this.animalRepo.findOne({ where: { id } });
    return this.animalRepo.remove(animal);
  }
}
