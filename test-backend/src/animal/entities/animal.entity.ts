import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnimalMenu } from '../../animal-menu/entities/animal-menu.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imgPath: string;

  @ManyToOne(() => AnimalMenu, (menu) => menu.code, { onDelete: 'SET NULL' })
  @JoinColumn({
    name: 'animal_code',
    referencedColumnName: 'code',
  })
  animalCode: AnimalMenu;
}
