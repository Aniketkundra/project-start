import { Component , NO_ERRORS_SCHEMA} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*  showFiller = false;
  title = 'Click any Link to get results.';
   usersClicked: boolean= false;
   employeesClicked: boolean= false; */
constructor(private snackBar: MatSnackBar, private router: Router){
}

  ngOnInit() {
    this.router.navigate(['/login'],{});
  }
/*   users(){
    this.router.navigate(['/users'],{});
    this.snackBar.open("Users Loaded.....", "Ok",{duration : 5000});
  }
  employees(){
    this.router.navigate(['/employees'],{});
   
  } */
 
}

