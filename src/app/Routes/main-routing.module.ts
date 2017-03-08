import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './../MainComponent/main.component';
import { RegisterComponent} from './../Register/register.component';

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
      }
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