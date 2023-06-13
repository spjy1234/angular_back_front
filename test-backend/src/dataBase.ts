import { DataSourceOptions } from 'typeorm';
import { Person } from './person/entities/person.entity';

export const dataBase: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'angular_test',
  entities: [Person],
  synchronize: true,
};
