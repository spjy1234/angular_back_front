import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {AnimalComponent} from "./animal/animal.component";


const routes: Routes = [
  {path: "person", component: PersonComponent},
  {path: "animal", component: AnimalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
