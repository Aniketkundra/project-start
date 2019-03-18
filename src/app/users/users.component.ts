import { Component, OnInit, Input } from '@angular/core';
import { GestureConfig } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


const ELEMENT_DATA: Object[]=
[ {id: 1,firstName:'Aniket', lastName:'Kundra', phone:9000003},
{id: 2,firstName:'sahil', lastName:'Kundra', phone:922222223},
{id: 3,firstName:'mukul', lastName:'Kundra', phone:94343423},
{id: 4,firstName:'rajan', lastName:'Kundra', phone:989999943},
{id: 5,firstName:'chesta', lastName:'Kundra', phone:989232243},
{id: 6,firstName:'dishu', lastName:'Kundra', phone:9891111113},
{id: 7,firstName:'swarna', lastName:'Kundra', phone:93421213},
{id: 8,firstName:'suman', lastName:'Kundra', phone:989888843},
{id: 9,firstName:'kanika', lastName:'Kundra', phone:989973343}]; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  columnNames: object[]= [
    {title:'Id', dataField: 'id', isSortable: true},
    {title:'First Name', dataField: 'firstName', isSortable: true},
    {title:'Last Name', dataField: 'lastName', isSortable: true},
    {title:'Phone', dataField: 'phone', isSortable: false}
  ]
  users= ELEMENT_DATA;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
    /* this.getConfig().subscribe(res =>         //calling method getconfig and getting respone in users array.
      this.users = res,
      err => {
        console.log(err.message);
      }); */
  }
/* 
  getConfig(): Observable<any> {            --method- backend call to users.json
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  } */
}
