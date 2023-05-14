import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { Description } from '../models/description';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() isFrench!: boolean;
  currentIndex: number = 0;

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
    this.updateDescription();
  }

  updateDescription(): void {
    interval(3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.getDescription().description.length;
    });
  }

  getDescription(): Description {
    return this.isFrench
      ? this.descriptionService.getFrenchDescription()
      : this.descriptionService.getEnglishDescription();
  }
}
