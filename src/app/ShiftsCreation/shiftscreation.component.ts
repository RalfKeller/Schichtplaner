import { Shift } from '../Domain/Shift';
import { Component } from '@angular/core';

@Component({
    selector: 'shiftscreation',
    templateUrl: 'shiftscreation.component.html'
})
export class ShiftsCreationComponent {

    data: Shift[][];

    testShift:Shift;


    constructor() {
        this.data = [[], [], [], [], [], [], []];
        this.testShift = {color: 'Blue', name: 'Morning Shift'};
    }
}