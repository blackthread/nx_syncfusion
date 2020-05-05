import { NgModule } from "@angular/core";
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SgButtonComponent } from './sg-button.component';
@NgModule({
  imports: [ButtonModule],
  declarations: [SgButtonComponent],
  exports: [SgButtonComponent]
})
export class SgButtonModule {}

