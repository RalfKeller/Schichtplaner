import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(username: string, password: string) : boolean {
        localStorage.setItem('currentUser', "{username: 'testUser'}")
        return true;
    }

    logout(){

    }
}