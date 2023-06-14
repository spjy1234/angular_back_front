import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Person} from "../person";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
  persons: Person[] = [];

  ngOnInit() {
    this.getPerson()
  }

  ngOnDestroy() {

  }

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  getPerson() {
    this.apiService.getPerson().subscribe(data => {
      this.persons = data;
    })
  }

  sendPerson(data: any) {
    const person: Person = {
      "firstName": data.value.firstName,
      "lastName": data.value.lastName,
      "age": parseInt(data.value.age),
      "sex": data.value.sex
    }
    this.apiService.postPerson(person).subscribe();
    console.log("Post")
  }

  putPerson(data: any) {
    const test: any = {}

    const id = parseInt(data.value.id)

    console.log(data.value)

    for (let key in data.value) {
      if (data.value[key] != "" && key != "id") {
        test[key] = data.value[key]
        if(key == "age"){
          test[key] = parseInt(data.value[key])
        }
      }
    }
    const person: Person = test;
    console.log(test)
    this.apiService.putPerson(id, person).subscribe();
    console.log("Put")
  }

  deletePerson(data:any){
    const id = parseInt(data.value.id);
    this.apiService.deletePerson(id).subscribe();
    console.log("delete");
  }

}
