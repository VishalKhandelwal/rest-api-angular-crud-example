import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFormFirstComponent } from './components/add-form-first/add-form-first.component';
import { AddFormSecondComponent } from './components/add-form-second/add-form-second.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormFirstComponent,
    AddFormSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
