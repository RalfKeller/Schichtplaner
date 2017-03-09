import { Component, Input } from '@angular/core';

import { Shift } from './../../Domain/Shift';

@Component({
    moduleId: module.id,
    selector: 'shift',
    templateUrl: 'shift.component.html'
})
export class ShiftComponent {
    
    @Input()
    shift:Shift;
    
    constructor() { }

}