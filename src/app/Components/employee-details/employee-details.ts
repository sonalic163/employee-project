import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, ActivatedRoute} from '@angular/router';
import {EmplyeeService, Employees} from '../../Services/emplyee-service';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule,RouterModule ],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails implements OnInit{
  employees!:Employees;
//id:any;
  constructor(private empService:EmplyeeService, private route:ActivatedRoute){}

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
   if(id){
    debugger;
    this.empService.getDetails(id).subscribe((response:any) => {
      console.log(response);
      this.employees=response.data;
    })
   }
    
  }


}
