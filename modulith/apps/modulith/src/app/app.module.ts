import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TabModule } from "@syncfusion/ej2-angular-navigations";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, TabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
