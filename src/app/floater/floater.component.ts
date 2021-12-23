import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FloaterService } from './floater.service';

@Component({
  selector: 'app-floater',
  templateUrl: './floater.component.html',
  styleUrls: ['./floater.component.scss'],
  host: {
    cdkDrag: 'true',
    cdkDragBoundary: '.f-main',
  },
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloaterComponent {
  @ViewChildren('floater') floater: QueryList<ElementRef<HTMLDivElement>>;

  // @Input() index: number;
  // @Input() component: any;

  constructor(
    public floaterService: FloaterService,
    private cdr: ChangeDetectorRef
  ) {
    this.floaterService.floaterClicked$.subscribe((index) => {
      this.floater.forEach((item, i) => {
        item.nativeElement.style.zIndex = i === index ? '100' : '50';
      });
    });
  }
}
