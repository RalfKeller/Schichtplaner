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

    constructor() {
        this.tShift = {
            color: 'Blue',
            name: 'Test'
        }

        this.shiftsA= [this.tShift];
        this.shiftsB = [];
     }

}