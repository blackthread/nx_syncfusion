import { Component } from '@angular/core';

@Component({
  selector: 'modulith-root',
 // templateUrl: './app.component.html',
  template:`<ejs-tab id="element">
    <e-tabitems>
      <e-tabitem [header]='headerText[0]' [content]="content0"></e-tabitem>
    </e-tabitems>
  </ejs-tab>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modulith';

  public headerText: Object = [{ 'text': 'Twitter' }];

  public content0: string = 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
    'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
    'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
    'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
    'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
    'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
    'search queries per day.';
}
