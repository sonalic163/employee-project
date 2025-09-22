import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EmplyeeService, Employees} from '../../Services/emplyee-service';
@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit{
  employees :Employees[]=[];
 // data: any;

  constructor(private empService : EmplyeeService) {}

  ngOnInit(): void {
    debugger;
    this.empService.getAll().subscribe((response: any) => {
      debugger;
      console.log(response)
      this.employees = response.data;
    });
  }

}
