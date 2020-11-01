import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ColdObservablesComponent } from './cold-observables/cold-observables.component';
import { HotObservablesIntroComponent } from './hot-observables-intro/hot-observables-intro.component';
import { HotObservablesComponent } from './hot-observables/hot-observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatTabsModule } from '@angular/material';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObservablesComponent,
    HotObservablesIntroComponent,
    HotObservablesComponent,
    SubjectsComponent,
    SubjectChildComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
