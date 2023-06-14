import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalMenuDto } from './create-animal-menu.dto';

export class UpdateAnimalMenuDto extends PartialType(CreateAnimalMenuDto) {}
