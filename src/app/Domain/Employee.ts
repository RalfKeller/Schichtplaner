import { Shift } from './Shift';
export class Employee {

    id: number;
    name: string;
    maxCapacity: number;
    currentCapacity: number;

    shifts: {[day: string]: Shift[]};
}