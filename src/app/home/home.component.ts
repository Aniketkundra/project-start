import { Component ,  OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller = false;
  title = 'Click any Link to get results.';
   usersClicked: boolean= false;
   employeesClicked: boolean= false;
constructor(private snackBar: MatSnackBar, private router: Router){
}

  ngOnInit() {}
  
  users(){
    this.router.navigate(['/home/users'],{});
    this.snackBar.open("Users Loaded.....", "Ok",{duration : 5000});
  }
  employees(){
    this.router.navigate(['/home/employees'],{});
   
  }
 /*  loademployees(){
    this.snackBar.open("Loading Employyes.....", "Cancel",{duration : 5000});
  } */
}
