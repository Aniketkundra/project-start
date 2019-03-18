import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
userName: string;
password: string;
isLogin: boolean;
  constructor(private router: Router, private snachbar: MatSnackBar) { }

  ngOnInit() {
  }
  authenticate(){
    if((this.userName=='aniket')&&(this.password=='aniket')){
     this.router.navigate(['/home'],{});
     //this.isLogin= true;
    }
    else{
      this.snachbar.open('Invalid Username/Password','Ok')
    }
  }

}
