import { Component, ViewChild } from '@angular/core';

import { ModalComponent } from 'ng2-bs4-modal/ng2-bs4-modal';
@Component({
    moduleId: module.id,
    selector: 'newShiftComponent',
    templateUrl: 'newShift.component.html'
})
export class NewShiftComponent {

    @ViewChild('modal')
    modal: ModalComponent;

    name: string;

    public start() {
        this.constructor();
        this.modal.open();
    }

    onModalClose(){
    }

    constructor() {
        this.name = 'Test';
     }
}