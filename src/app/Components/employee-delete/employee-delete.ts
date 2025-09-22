import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, Router,ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EmplyeeService, Employees} from '../../Services/emplyee-service';

declare var bootstrap:any;

@Component({
  selector: 'app-employee-delete',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './employee-delete.html',
  styleUrl: './employee-delete.css'
})
export class EmployeeDelete implements OnInit{
  employees:Employees = {empId:0, name:'', age:0, degree:''}

  constructor(private empService:EmplyeeService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.empService.getDetails(id).subscribe((response:any) =>
    this.employees= response.data
    );
  }
  
delete(){
  debugger;
  this.empService.delete(this.employees.empId).subscribe(() =>{
    const modalEl = document.getElementById('successModal');
    if(modalEl){
      const success = new bootstrap.Modal(modalEl);
      success.show();
      modalEl.addEventListener('hidden.bs.modal', () => {
        return this.router.navigate(['employees']);
      });
    }
  
});
}
}
