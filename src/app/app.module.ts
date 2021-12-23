import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloaterModule } from './floater/floater.module';
import { AppTestingComponent } from './testing.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FloaterModule],
  declarations: [AppComponent, AppTestingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
