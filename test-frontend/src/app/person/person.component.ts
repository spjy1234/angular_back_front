import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Person} from "../person";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
  persons: Person[] = [];

  createForm:FormGroup = this.fb.group({
    firstName: ['test', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
    lastName: ['test', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
    age: [0, [Validators.required, Validators.max(150)]],
    sex: ["male", [Validators.required, Validators.pattern("male")]],
  })

  postForm(){
    console.log(this.createForm.value)
    const test: any = {
      "firstName": this.createForm.value.firstName,
      "lastName": this.createForm.value.lastName,
      "age": this.createForm.value.age,
      "sex": this.createForm.value.sex
    };
    console.log(test)
    const test1: Person = test;
    console.log(test1)

    for(let keys in this.persons){
      for(let key in this.persons[keys]){
        if(key == "firstName"){
          if(this.persons[keys][key] == this.createForm.value.firstName){
            alert("다른값을 입력해주세요")
          }
        }
      }
    }

    // this.apiService.postPerson(test1).subscribe();

  }

  ngOnInit() {
    this.getPerson()
  }

  ngOnDestroy() {

  }

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private fb: FormBuilder
    ) {

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
