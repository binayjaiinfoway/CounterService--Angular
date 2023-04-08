import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildButtonComponent } from './child-button/child-button.component';
import { ChildResultComponent } from './child-result/child-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildButtonComponent,
    ChildResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
