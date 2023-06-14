import { IsOptional, IsString } from 'class-validator';

export class UpdateAnimalDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  imgPath: string;
}
