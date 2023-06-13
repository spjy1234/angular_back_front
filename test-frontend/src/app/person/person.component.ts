import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Person} from "../person";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  persons: Person[] = [];
  test = {
    "firstName": "test222",
    "lastName": "test222",
    "age": 11,
    "sex": "male"
  };
  ngOnInit() {
    this.getPerson()
    this.sendPerson()
  }

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  getPerson(){
    this.apiService.getPerson().subscribe(data => {
      this.persons = data;
    })
  }

  sendPerson(){
    this.apiService.postPerson(this.test);
    console.log(this.test)
  }
}
