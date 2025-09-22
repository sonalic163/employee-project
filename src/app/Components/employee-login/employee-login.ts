import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EmplyeeService, Employees} from '../../Services/emplyee-service';

@Component({
  selector: 'app-employee-login',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-login.html',
  styleUrl: './employee-login.css'
})
export class EmployeeLogin implements OnInit{
empName:any='';
empAge:any=0;
errorMsg:string='';

  constructor(private empService:EmplyeeService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    
  }

  login(){
    debugger;
    if(this.empName != '' && this.empAge != 0){
      var empName = this.empName;
      var empAge = this.empAge;
this.empService.getLogin(empName,empAge).subscribe((response:any) => {
  debugger;
      console.log(response);
      localStorage.setItem('token',response.token);
      this.router.navigate(['/employees'])
       }); 
    }else{
      this.errorMsg='Invalid name & age';
    }
  }
}
