import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface Employees
{
  empId:number;
  name:string;
  age:number;
  degree:string;
}

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {
  private apiUrl='http://localhost:9000/emp-service';
  private loginUrl='http://localhost:9000/emp-login';
  private apiUrlPost='http://localhost:7000/employee/api/Employee/';

  constructor(private http:HttpClient){}

  getLogin(name:any, age:any):Observable<Employees[]>{
    debugger;
    return this.http.get<Employees[]>(`${this.loginUrl}/${name}/${age}`);
  }

  getAll():Observable<Employees[]>{
    debugger;
    const token = localStorage.getItem('token');  // wherever you stored it
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Employees[]>(this.apiUrl,{headers});
  }

  getDetails(id: any):Observable<Employees[]>{
    debugger;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Employees[]>(`${this.apiUrl}/${id}`, {headers});
  }

  create(emp:Employees):Observable<Employees>{
    debugger;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Employees>(this.apiUrlPost + 'AddEmployee' , emp, {headers});
  }

  update(emp:Employees):Observable<Employees>{
    debugger;
     const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Employees>(this.apiUrlPost +'UpdateEmployee', emp, {headers})
  }

   delete(id: any):Observable<Employees>{
    debugger;
         const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Employees>(`${this.apiUrl}/${id}`,null, {headers});
  }
}
