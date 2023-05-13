import { Component, Input } from '@angular/core';
import { Current } from '../../models/current';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() current!: Current;
}
