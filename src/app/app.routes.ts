import { Routes,RouterModule } from '@angular/router';

import {NgModule} from '@angular/core';

import {EmployeeList} from './Components/employee-list/employee-list';
import {EmployeeCreate} from './Components/employee-create/employee-create';
import {EmployeeEdit} from './Components/employee-edit/employee-edit';
import {EmployeeDetails} from './Components/employee-details/employee-details';
import {EmployeeDelete} from './Components/employee-delete/employee-delete';
import {EmployeeLogin} from './Components/employee-login/employee-login';

import {authGuard} from'./auth-guard';
export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:EmployeeLogin},
  {path:'employees', component:EmployeeList, canActivate:[authGuard]},
  {path:'employees/create', component:EmployeeCreate, canActivate:[authGuard]},
  {path:'employees/edit/:id', component:EmployeeEdit, canActivate:[authGuard]},
  {path:'employees/details/:id', component:EmployeeDetails, canActivate:[authGuard]},
  {path:'employees/delete/:id', component:EmployeeDelete, canActivate:[authGuard]}
];
