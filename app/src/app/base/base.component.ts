import { Component } from '@angular/core';
import { Description } from '../../models/description';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  description: Description;

  constructor() {
    this.description = new Description('Hello world I am ', ['Camille', 'Touron', 'Awesome']);
  }
}
