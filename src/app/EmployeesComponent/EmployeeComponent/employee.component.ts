import { Component, Input } from '@angular/core';

import { Employee } from './../../Domain/Employee';
@Component({
    selector: 'employee',
    templateUrl: 'employee.component.html'
})
export class EmployeeComponent {

    @Input()
    data:Employee;

    constructor() { }
}