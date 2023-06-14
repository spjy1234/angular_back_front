import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "./person";
import {Animal} from "./animal";
import {AnimalMenu} from "./animal-menu";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  personUrl = "http://localhost:3000/person/";
  animalUrl = "http://localhost:3000/animal/"
  animalMenu = "http://localhost:3000/animal-menu/"
  constructor(private http: HttpClient) {}

  getPerson(){
    return this.http.get<Person[]>(this.personUrl);
  }

  postPerson(person:Person){
    return this.http.post<Person>(this.personUrl, person);
  }

  putPerson(id:number, person: Person){
    return this.http.put<Person>(this.personUrl+id, person);
  }

  deletePerson(id:number){
    return this.http.delete<Person>(this.personUrl+id);
  }

  getAnimal(){
    return this.http.get<Animal[]>(this.animalUrl);
  }

  getAnimalMenu(){
    return this.http.get<AnimalMenu>(this.animalMenu);
  }

  selectAnimalMenu(id:number){
    return this.http.get<AnimalMenu[]>(this.animalMenu+id);
  }
}
