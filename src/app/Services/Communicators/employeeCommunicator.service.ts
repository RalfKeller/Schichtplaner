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

        const ralf = new Employee();
        const stefan = new Employee();
        ralf.name = "Ralf";
        ralf.currentCapacity = 20;
        ralf.maxCapacity = 30;
        ralf.id = 1;
        ralf.shifts = {};
        ralf.shifts['Montag'] = [{name:'Test', color:'Blue'}];

        stefan.name = "Stefan";
        stefan.currentCapacity = 20;
        stefan.maxCapacity = 30;
        stefan.id = 2;
        stefan.shifts = {};
        stefan.shifts['Montag'] = [{name:'Test', color:'Blue'}];

        return [ralf, stefan];
    }

}