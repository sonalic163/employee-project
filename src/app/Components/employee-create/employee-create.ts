import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, ActivatedRoute, Router} from '@angular/router';
import {EmplyeeService, Employees} from '../../Services/emplyee-service';
import {FormsModule} from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-create',
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css'
})
export class EmployeeCreate implements OnInit{
employees: Employees = {empId:0 , name:'', age:0, degree:''}

  constructor(private empService : EmplyeeService, private route:Router){}

  ngOnInit(): void {
    
  }

create(){
this.empService.create(this.employees).subscribe(() =>{
  const modalEl = document.getElementById('successModal');
  if(modalEl){
    const success = new bootstrap.Modal(modalEl);
    success.show();
    modalEl.addEventListener('hidden.bs.modal',() => {
this.route.navigate(['/employees']);
    });
  }
});
}
}
