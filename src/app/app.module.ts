import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RouterModule, Routes } from '@angular/router';

import {  LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { AppComponent } from './app.component';
import { MainComponent } from './MainComponent/main.component'
import { AuthGuard } from './AuthGuard';
import { AuthenticationService } from './Services/authentication.service';

import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { SidebarModule } from 'ng-sidebar';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ButtonsModule.forRoot(),
    SidebarModule,
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
