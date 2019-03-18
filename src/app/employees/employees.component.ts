import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
   
    this.snackBar.open("Employees Loaded.....", "Ok",{duration : 3000});
  }

}
