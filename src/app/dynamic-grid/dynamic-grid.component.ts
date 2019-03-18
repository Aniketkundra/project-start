import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})

export class DynamicGridComponent implements OnInit {
 
  @Input() gridData: object[];
  @Input() columnNames: object[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: MatTableDataSource<any>;

  displayedColumns=[];
  constructor() { }

  ngOnInit() {
 
  
    this.columnNames.forEach(element => {
      this.displayedColumns.push(element['dataField'])
    });
    
    this.data= new MatTableDataSource(this.gridData);
    this.data.paginator=this.paginator;
    this.data.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }
}

/* const users=[ {id: 1,firstName:'Aniket', lastName:'Kundra', phone:9899786543},
{id: 2,firstName:'sahil', lastName:'Kundra', phone:9899786543},
{id: 3,firstName:'mukul', lastName:'Kundra', phone:9899786543},
{id: 4,firstName:'rajan', lastName:'Kundra', phone:9899786543},
{id: 5,firstName:'chesta', lastName:'Kundra', phone:989232243},
{id: 6,firstName:'dishu', lastName:'Kundra', phone:9899786543},
{id: 7,firstName:'swarna', lastName:'Kundra', phone:9899786543},
{id: 8,firstName:'suman', lastName:'Kundra', phone:9899786543},
{id: 9,firstName:'kanika', lastName:'Kundra', phone:9899776543}];  */