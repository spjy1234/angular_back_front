import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Animal} from "../animal";
import {AnimalMenu} from "../animal-menu";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, OnDestroy {

  animalMenu: AnimalMenu[] = [];

  allAnimal$: Observable<Animal[]> | undefined;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    // this.getAnimal()
    this.getAnimalMenu()
    this.allAnimal$ = this.apiService.getAnimal()
  }

  ngOnDestroy() {
  }

  getAnimalMenu() {
    this.apiService.getAnimalMenu().subscribe((data: any) => {
      this.animalMenu = data
      console.log(this.animalMenu)
    })
  }

  selectAnimal(id: any) {
    console.log(id)
    if(id == 0){
      this.allAnimal$ = this.apiService.getAnimal()
    }

    if (id == 1) {
      this.allAnimal$ = this.apiService.selectAnimalMenu(id).pipe(
        map(data => data.animals)
      )
    }
    if (id == 2) {
      this.allAnimal$ = this.apiService.selectAnimalMenu(id).pipe(
        map(data => data.animals)
      )
    }
  }

}
