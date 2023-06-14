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
  animals: Animal[] = [];
  animalMenu: any;
  catSelect: AnimalMenu[] = [];
  dogSelect: AnimalMenu[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    // this.getAnimal()
    this.getAnimalMenu()
  }

  ngOnDestroy() {
  }

  // getAnimal() {
  //   this.apiService.getAnimal().subscribe(data => {
  //     this.animals = data;
  //     console.log(this.animals)
  //   })
  // }

  getAnimalMenu() {
    this.apiService.getAnimalMenu().subscribe(data => {
      this.animalMenu = data
      console.log(this.animalMenu)
    })
  }

  selectAnimal(id: any) {
    console.log(id)
    // if (id == 1) {
    //   this.apiService.selectAnimalMenu(id).subscribe(data => {
    //     this.dogSelect = data;
    //     console.log(this.dogSelect)
    //   })
    // }
    // if (id == 2) {
    //   this.apiService.selectAnimalMenu(id).subscribe(data => {
    //     this.catSelect = data;
    //     console.log(this.catSelect)
    //   })
    // }

  }

}
