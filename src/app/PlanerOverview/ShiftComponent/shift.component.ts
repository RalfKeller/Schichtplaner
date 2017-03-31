import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Shift } from './../../Domain/Shift';

@Component({
    selector: 'shift',
    templateUrl: 'shift.component.html'
})
export class ShiftComponent implements OnInit {

    @Input()
    data: Shift;

    @Input()
    dropZones: string[];

    @Output()
    onDragged = new EventEmitter<Shift>();

    constructor() { }

    onDrag() {
        this.onDragged.emit(this.data);
    }

     ngOnInit(): void {
        if (this.dropZones == null) {
            this.dropZones = [];
        }

        console.log(this.dropZones);
    }

}