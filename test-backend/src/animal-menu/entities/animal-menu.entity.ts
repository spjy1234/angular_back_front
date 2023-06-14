import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../../animal/entities/animal.entity';

@Entity()
export class AnimalMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @OneToMany(() => Animal, (animal) => animal.animalCode, {
    onDelete: 'SET NULL',
  })
  animals: Animal[];
}
