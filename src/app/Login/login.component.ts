import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../Services/authentication.service';
import { Router } from '@angular/router';

const loadingButtonText = "Loading...";
const loginButtonText = "Login";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;

    loading: boolean;
    loginButtonText:string;

    error:boolean;

    constructor(private authService: AuthenticationService, private router: Router) { 
        this.loginButtonText = loginButtonText;
        this.loading = false;
        this.error = false;
    }

    ngOnInit(): void {
        this.authService.logout();
    }

    onSubmit() {
        this.loading = true;
        this.loginButtonText = loadingButtonText;

        let success: boolean;
        success = this.authService.login(this.username, this.password);

        if (success) {
            this.router.navigate(["/"]);
        }

        else{
            this.error = true;
        }
        this.loading = false;
        this.loginButtonText = loginButtonText;
    }
}