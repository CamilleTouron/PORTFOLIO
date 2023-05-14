import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentService } from '../services/current.service';
import { Current } from '../models/current';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnChanges {
  @Input() isFrench!: boolean;
  current: Current = new Current('', '', '', '', '');

  constructor(private currentService: CurrentService) { }

  ngOnInit(): void {
    this.getCurrent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFrench'] && !changes['isFrench'].firstChange) {
      this.getCurrent();
    }
  }

  getCurrent(): void {
    if (this.isFrench) {
      this.currentService.getFrenchCurrent().subscribe(
        (current: Current) => {
          this.current = current;
        },
        (error: any) => {
          console.error('Error retrieving French current:', error);
        }
      );
    } else {
      this.currentService.getEnglishCurrent().subscribe(
        (current: Current) => {
          this.current = current;
        },
        (error: any) => {
          console.error('Error retrieving English current:', error);
        }
      );
    }
  }
}
