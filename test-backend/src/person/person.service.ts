import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepo: Repository<Person>,
  ) {}
  create(createPersonDto: CreatePersonDto) {
    return this.personRepo.save(createPersonDto);
  }

  findAll() {
    return this.personRepo.find();
  }

  async findOne(id: number) {
    return await this.personRepo.findOne({ where: { id } });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepo.findOne({ where: { id } });
    for (const key in updatePersonDto) {
      if (key in person) {
        person[key] = updatePersonDto[key];
      }
    }
    return this.personRepo.save(person);
  }

  async remove(id: number) {
    const person = await this.personRepo.findOne({ where: { id } });
    return this.personRepo.remove(person);
  }
}
