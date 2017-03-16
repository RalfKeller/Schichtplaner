import { Employee } from '../../Domain/Employee';
import { Component, ViewChild } from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
    moduleId: module.id,
    selector: 'newEmployeeModal',
    templateUrl: 'newEmployee.component.html'
})
export class NewEmployeeComponent {

    @ViewChild('modal')
    modal: ModalComponent;

    name: string;
    capacity: string;

    availibleOn: boolean[];

    public start() {
        this.constructor();
        this.modal.open();
    }

    editEmployee(employee: Employee) {
        this.name = employee.name;
        this.modal.open();
    }
    onModalClose() {
    }


    toggleAll(select: boolean) {
        this.availibleOn = [select, select, select, select, select, select, select];
    }

    constructor() {
        this.name = 'Test';
        this.availibleOn = [false, false, false, false, false, false, false];
     }
}