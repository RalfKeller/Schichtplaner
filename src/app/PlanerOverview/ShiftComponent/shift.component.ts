import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Shift } from './../../Domain/Shift';

@Component({
    selector: 'shift',
    templateUrl: 'shift.component.html'
})
export class ShiftComponent {
    
    @Input()
    data:Shift;

    @Output()
    onDragged = new EventEmitter<Shift>();

    constructor() { }

    onDrag(){ 
        this.onDragged.emit(this.data);
    }

}