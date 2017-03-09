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

import { AuthGuard } from './AuthGuard';
import { AuthenticationService } from './Services/authentication.service';
import { MainRoutingModule } from './Routes/main-routing.module';

import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown'

import { SidebarModule } from 'ng-sidebar';

import {DndModule} from 'ng2-dnd';


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
    DashboardComponent
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
    SidebarModule,
    MainRoutingModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
