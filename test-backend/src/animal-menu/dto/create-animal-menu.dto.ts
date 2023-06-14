import { Animal } from '../../animal/entities/animal.entity';
import { IsString } from 'class-validator';

export class CreateAnimalMenuDto {
  @IsString()
  code: string;

  animals: Animal[];
}
