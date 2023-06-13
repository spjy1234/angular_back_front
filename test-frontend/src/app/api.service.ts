import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  personUrl = "http://localhost:3000/person/";
  constructor(private http: HttpClient) {}

  getPerson(){
    return this.http.get<Person[]>(this.personUrl);
  }

  postPerson(person:Person){
    return this.http.post(this.personUrl,person);
  }
}
