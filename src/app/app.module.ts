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
import { AuthGuard } from './AuthGuard';
import { AuthenticationService } from './Services/authentication.service';
import { MainRoutingModule } from './Routes/main-routing.module';

import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { SidebarModule } from 'ng-sidebar';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    PlanerOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    ButtonsModule.forRoot(),
    SidebarModule,
    MainRoutingModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
