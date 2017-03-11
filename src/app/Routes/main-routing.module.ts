import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './../MainComponent/main.component';
import { RegisterComponent} from './../Register/register.component';
import { PlanerOverviewComponent } from './../PlanerOverview/planerOverview.component';
import { DashboardComponent } from './../Dashboard/dashboard.component';
import { EmployeesComponent } from './../EmployeesComponent/employees.component';
import { ShiftsCreationComponent } from './../ShiftsCreation/shiftscreation.component';

import { AuthGuard } from './../AuthGuard';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },

      {
        path:'planeroverview',
        component:PlanerOverviewComponent,
      },
      {
        path: 'dashboard',
        component:DashboardComponent,
        
      },
      {
        path:'employees',
        component:EmployeesComponent
      },
      {
        path:'shifts',
        component:ShiftsCreationComponent
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:"full"
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }