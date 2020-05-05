import { TabModule } from "@syncfusion/ej2-angular-navigations";
import {SgButtonComponent} from "../sg-button/sg-button.component";
import { TabsComponent } from './tabs.component';

export default {
  title: 'Tabs'
}

export const Default = () => ({
         moduleMetadata: {
           imports: [TabModule]
         },
         component: TabsComponent
       });
//template: `<button ejs-button cssClass="e-primary">Test</button>`
