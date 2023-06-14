import {Animal} from "./animal";

export interface AnimalMenu {
  id?: number;
  code?: string;
  animals: Animal[];
}
