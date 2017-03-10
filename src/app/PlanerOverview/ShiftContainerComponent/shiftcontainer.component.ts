import { Component, Input} from '@angular/core';

import { Shift } from './../../Domain/Shift';

@Component({
    moduleId: module.id,
    selector: 'shiftcontainer',
    templateUrl: 'shiftcontainer.component.html'
})
export class ShifContainerComponent {

    @Input()
    shifts:Shift[];

    constructor() { 
        this.shifts = [];
    }

    dropOn(event){
        let newShift: Shift = event.dragData;
        
        this.shifts.push(newShift);
    }

    onDraggedShift(draggedShift: Shift){
        this.shifts.splice(this.shifts.indexOf(draggedShift), 1);
    }
}