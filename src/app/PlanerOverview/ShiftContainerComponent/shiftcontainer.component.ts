import { Component, Input, OnInit, Output } from '@angular/core';

import { Shift } from './../../Domain/Shift';

@Component({
    moduleId: module.id,
    selector: 'shiftcontainer',
    templateUrl: 'shiftcontainer.component.html'
})
export class ShifContainerComponent implements OnInit {

    @Input()
    @Output()
    shifts: Shift[];

    @Input()
    zones: string[];

    constructor() {
        this.shifts = [];
    }

    dropOn(event) {
        const newShift: Shift = event.dragData;

        this.shifts.push(newShift);
    }

    onDraggedShift(draggedShift: Shift) {
        this.shifts.splice(this.shifts.indexOf(draggedShift), 1);
    }

     ngOnInit(): void {
        if (this.shifts == null) {
            this.shifts = [];
        }

        if(this.zones == null) {
            this.zones = [];
        }
    }
}