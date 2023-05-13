import { Component } from '@angular/core';
import { Description } from '../../models/description';
import { Current } from '../../models/current';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  description: Description;
  current: Current;

  constructor() {
    this.description = new Description('Hello world I am ', ['Camille', 'Touron', 'Awesome']);
    this.current = new Current('Currently ...', 'In apprenticeship', '', '', '');
  }
}
