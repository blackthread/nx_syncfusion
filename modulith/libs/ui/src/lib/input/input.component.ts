import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modulith-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label = 'Label';
  @Input() placeholder = 'Placeholder';
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
