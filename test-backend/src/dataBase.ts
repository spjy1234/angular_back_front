import { DataSourceOptions } from 'typeorm';
import { Person } from './person/entities/person.entity';
import { Animal } from './animal/entities/animal.entity';
import {AnimalMenu} from "./animal-menu/entities/animal-menu.entity";

export const dataBase: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'angular_test',
  entities: [Person, Animal, AnimalMenu],
  synchronize: true,
};
