import { EmployeeCommunicatorService } from '../Services/Communicators/employeeCommunicator.service';
import { Employee } from '../Domain/Employee';
import { Component, OnInit } from '@angular/core';
import { ShiftComponent } from './ShiftComponent/shift.component';
import { Shift } from './../Domain/Shift';
@Component({
    moduleId: module.id,
    selector: 'planerOverview',
    templateUrl: 'planerOverview.component.html'
})
export class PlanerOverviewComponent  {

    tShift: Shift;

    shiftsA: Shift[];
    shiftsB: Shift[];

    employees: Employee[];

    constructor(private employeeSerice: EmployeeCommunicatorService) {

        this.employees = employeeSerice.getEmployees();
     }
}