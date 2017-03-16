import { Component, OnInit } from '@angular/core';

import { Employee } from './../Domain/Employee';
import { EmployeeCommunicatorService } from './../Services/Communicators/employeeCommunicator.service';

@Component({
    moduleId: module.id,
    selector: 'employees',
    templateUrl: 'employees.component.html'
})
export class EmployeesComponent  {


    data: Employee[];
    constructor(private employeeCommunicator:EmployeeCommunicatorService) { 
        this.data = employeeCommunicator.getEmployees();
    }
}