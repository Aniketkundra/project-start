import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';


@NgModule({
  declarations: [
    AppComponent, 
   UsersComponent, UserComponent, EmployeesComponent, DynamicGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatListModule,
    MatSnackBarModule,
    CommonModule,
    HttpClientModule, 
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
   MatSidenavModule,
   MatIconModule,
   MatToolbarModule
  ],

  entryComponents: [
  ], 
  providers: [MatSnackBar, OVERLAY_PROVIDERS],
  bootstrap: [AppComponent], 

  schemas: [
    
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
