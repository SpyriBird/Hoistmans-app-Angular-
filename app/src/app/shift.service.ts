import { Injectable } from '@angular/core';

export enum CraneType {
  single = 'Одинарный',
  double = 'Двойной'
}
export interface Truck {
  name: string,
  loaded: number,
  unloaded: number
}


export interface Shift {
  readonly id: number,
  readonly craneType: CraneType,
  workerName: string,
  dateOfStart: Date,
  dateOfFinish: Date,
  firstCrane: Truck[],
  secondCrane?: Truck[],
  totalLoad?: number,
  totalUnload?: number
}

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private _shifts: Shift[] = [
    {id: 1, craneType: CraneType.double, workerName: 'name1', dateOfStart: new Date('2020-12-24T08:00'), dateOfFinish: new Date('2020-12-24T19:00'), firstCrane: [{name: 'ygdsc', loaded: 10, unloaded: 0}]},
    {id: 2, craneType: CraneType.double, workerName: 'name2', dateOfStart: new Date('2020-12-24T08:00'), dateOfFinish: new Date('2020-12-24T19:00'), firstCrane: [{name: 'ygdsc', loaded: 10, unloaded: 0}]},
    {id: 3, craneType: CraneType.double, workerName: 'name3', dateOfStart: new Date('2020-12-24T08:00'), dateOfFinish: new Date('2020-12-24T19:00'), firstCrane: [{name: 'ygdsc', loaded: 10, unloaded: 0}]},
    {id: 4, craneType: CraneType.double, workerName: 'name4', dateOfStart: new Date('2020-12-24T08:00'), dateOfFinish: new Date('2020-12-24T19:00'), firstCrane: [{name: 'ygdsc', loaded: 10, unloaded: 0}]},
    {id: 5, craneType: CraneType.double, workerName: 'name5', dateOfStart: new Date('2020-12-24T08:00'), dateOfFinish: new Date('2020-12-24T19:00'), firstCrane: [{name: 'ygdsc', loaded: 10, unloaded: 0}]},
  ]

  constructor() { }

  public getShifts() {
    return this._shifts;
  }

  public addShift(shift: Shift) {
    this._shifts.push(shift);
  }

  public removeShift(id: number) {
    this._shifts.filter( (item) => item.id !== id);
  }

  public editShift(shift: Shift) {

    let editedIndex = this._shifts.findIndex( (item) => item.id === shift.id);
    this._shifts[editedIndex] = shift;

  }
}