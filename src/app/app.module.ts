import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RouterModule, Routes } from '@angular/router';

import {  LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { AppComponent } from './app.component';
import { MainComponent } from './MainComponent/main.component'
import { PlanerOverviewComponent } from './PlanerOverview/planerOverview.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { EmployeesComponent } from './EmployeesComponent/employees.component';
import { NewEmployeeComponent } from './EmployeesComponent/NewEmployeeModal/newEmployee.component';
import { ShiftsCreationComponent } from './ShiftsCreation/shiftscreation.component';
import { NewShiftComponent } from './ShiftsCreation/NewShiftModal/newShift.component';

import { ShiftComponent } from './PlanerOverview/ShiftComponent/shift.component';
import { ShifContainerComponent } from './PlanerOverview/ShiftContainerComponent/shiftcontainer.component';

import { AuthGuard } from './AuthGuard';
import { AuthenticationService } from './Services/authentication.service';
import { MainRoutingModule } from './Routes/main-routing.module';
import { EmployeeCommunicatorService } from './Services/Communicators/employeeCommunicator.service';

import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown'

import { SidebarModule } from 'ng-sidebar';

import {DndModule} from 'ng2-dnd';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    PlanerOverviewComponent,
    DashboardComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    ShiftComponent,
    ShifContainerComponent,
    ShiftsCreationComponent,
    NewShiftComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    DndModule.forRoot(),
    SidebarModule,
    MainRoutingModule,
    Ng2Bs3ModalModule
  ],
  providers: [AuthGuard, AuthenticationService, EmployeeCommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
