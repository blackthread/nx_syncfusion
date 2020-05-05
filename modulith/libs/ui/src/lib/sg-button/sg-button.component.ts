import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modulith-sg-button',
  templateUrl: './sg-button.component.html',
  //template:`<button ejs-button cssClass="e-primary" >Button</button>`,
  styleUrls: ['./sg-button.component.scss']
})
export class SgButtonComponent implements OnInit {
  @Input() text = 'Selligent Button';
  @Input() mycss = 'e-primary';
  @Input() iconcss = 'e-search-icon';
  @Input() disabled = false;
  constructor() {}

  ngOnInit(): void {}
}
