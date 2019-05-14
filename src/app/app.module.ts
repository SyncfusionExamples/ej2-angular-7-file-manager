import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileManagerAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
