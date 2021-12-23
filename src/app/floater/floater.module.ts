import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FloaterComponent } from './floater.component';
import { FloaterContainerComponent } from './floater.container';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DomService } from './dom.service';

@NgModule({
  imports: [CommonModule, DragDropModule],
  exports: [FloaterComponent, FloaterContainerComponent],
  declarations: [FloaterComponent, FloaterContainerComponent],
  providers: [DomService],
})
export class FloaterModule {}
