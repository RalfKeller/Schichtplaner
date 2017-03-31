import { Shift } from '../../Domain/Shift';
import { Component, Input, OnInit } from '@angular/core';

import { Employee } from './../../Domain/Employee';
@Component({
    selector: 'employeeDay',
    templateUrl: 'employeeDay.component.html'
})
export class EmployeeDayComponent implements OnInit {

    @Input()
    data: Employee;

    @Input()
    day: string;

    shiftData: Shift[];

    constructor() {
        this.shiftData = [];
    }

     ngOnInit(): void {
         try {
            this.shiftData = this.data.shifts[this.day];
        } catch (excpetion) {
            this.shiftData = [];
        }
    }
}