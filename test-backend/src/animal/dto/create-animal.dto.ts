import { IsString } from 'class-validator';
import { AnimalMenu } from '../../animal-menu/entities/animal-menu.entity';

export class CreateAnimalDto {
  @IsString()
  name: string;

  @IsString()
  imgPath: string;

  @IsString()
  animalCode: AnimalMenu;
}
