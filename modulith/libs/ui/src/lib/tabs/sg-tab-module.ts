import { NgModule } from "@angular/core";
import { TabModule} from "@syncfusion/ej2-angular-navigations";
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [TabModule],
  declarations: [TabsComponent],
  exports: [TabsComponent]
})

export class SgTabsModule {}
