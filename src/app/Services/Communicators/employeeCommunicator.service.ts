import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Employee } from './../../Domain/Employee';

@Injectable()
export class EmployeeCommunicatorService {

    constructor(private http: Http) { }

    addEmployee(employee: Employee) {
    }

    getEmployees(): Employee[] {

        return [
            { id: 1, name: "Ralf", maxCapacity: 30, currentCapacity: 20 },
            { id: 2, name: "Stefan", maxCapacity: 20, currentCapacity: 10 }
        ];
    }

}