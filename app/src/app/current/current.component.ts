import { Component, Input, OnInit } from '@angular/core';
import { Current } from '../../models/current';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() isFrench!: boolean;
  constructor(private currentService: CurrentService) { }
  getCurrent(): Current {
    return this.isFrench ? this.currentService.getFrenchCurrent() : this.currentService.getEnglishCurrent();
  }
}
