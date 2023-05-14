import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { Description } from '../models/description';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnChanges {
  @Input() isFrench!: boolean;
  description: Description = new Description('', []);

  currentIndex: number = 0;

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
    this.getDescription();
    this.updateDescription();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFrench'] && !changes['isFrench'].firstChange) {
      this.getDescription();
    }
  }

  updateDescription(): void {
    interval(3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.description.description.length;
    });
  }

  getDescription(): void {
    if (this.isFrench) {
      this.descriptionService.getFrenchDescription().subscribe(
        (description: Description) => {
          this.description = description;
        },
        (error: any) => {
          console.error('Error retrieving French description:', error);
        }
      );
    } else {
      this.descriptionService.getEnglishDescription().subscribe(
        (description: Description) => {
          this.description = description;
        },
        (error: any) => {
          console.error('Error retrieving English description:', error);
        }
      );
    }
  }
}
