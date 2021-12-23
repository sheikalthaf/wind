import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DomService } from './dom.service';

@Injectable({ providedIn: 'root' })
export class FloaterService {
  addService$ = new Subject();

  floaterClicked$ = new Subject<number>();

  arr: any[] = [];

  constructor(public dom: DomService) {}

  add({ comp }: any) {
    this.addService$.next(1);
    const len = this.arr.length;
    this.arr.push({ comp });
    console.log(this.arr);
    this.floaterClicked$.next(len);
  }

  close(index: number) {
    this.arr.splice(index, 1);
  }
}
