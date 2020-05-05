import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { SgButtonComponent } from './sg-button/sg-button.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [InputComponent, TailwindComponent, SgButtonComponent, TabsComponent],
  exports: [InputComponent, TailwindComponent, SgButtonComponent, TabsComponent]
})
export class UiModule {}
