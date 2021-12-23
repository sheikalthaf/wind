import { Component, OnInit } from '@angular/core';
import { FloaterService } from './floater/floater.service';
import { AppTestingComponent } from './testing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wind';

  constructor(public pop: FloaterService) {}

  ngOnInit() {
    this.pop.dom.appe();
  }

  open() {
    this.pop.add({ comp: AppTestingComponent, data: { position: 'center' } });
  }
}
