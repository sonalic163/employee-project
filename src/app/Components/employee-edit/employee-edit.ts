import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EmplyeeService, Employees } from '../../Services/emplyee-service';

declare var bootstrap:any;

@Component({
  selector: 'app-employee-edit',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-edit.html',
  styleUrl: './employee-edit.css'
})
export class EmployeeEdit implements OnInit{
employees:Employees={empId:0,name:'',age:0, degree:''};
empName:string = '';

constructor(private empService:EmplyeeService, private router:Router, private route:ActivatedRoute){}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

 this.empService.getDetails(id).subscribe((response:any) => {
      console.log(response);
      this.employees=response.data;
    })

}

update() {
  this.empService.update(this.employees).subscribe(() => {
    this.empName = this.employees.name;

    const modalEl = document.getElementById('successModal');
    if (modalEl) {
      debugger;
      const success = new bootstrap.Modal(modalEl);
      success.show();
      modalEl.addEventListener('hidden.bs.modal',() => {
  this.router.navigate(['/employees']);
      });
      
    }
  });

}
}
