import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FloaterComponent } from './floater.component';
import { FloaterService } from './floater.service';

@Component({
  selector: 'app-floater-container',
  template: `<main class="f-main">
    <ng-container *ngFor="let item of floaterService.arr; index as i">
      <app-floater></app-floater>
    </ng-container>
  </main>`,
  styles: [
    `
      .f-main {
        position: relative;
        width: 100vw;
        height: 100vh;
      }
    `,
  ],
})
export class FloaterContainerComponent {
  @ViewChildren(FloaterComponent, { read: ElementRef }) floater: QueryList<
    ElementRef<HTMLDivElement>
  >;

  constructor(
    public floaterService: FloaterService // private cdr: ChangeDetectorRef
  ) {
    this.floaterService.floaterClicked$.subscribe((index) => {
      this.floater.forEach((item, i) => {
        item.nativeElement.style.zIndex = i === index ? '100' : '50';
      });
    });
  }
}
