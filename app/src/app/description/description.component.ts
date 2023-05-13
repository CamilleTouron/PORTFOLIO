import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Description } from '../../models/description';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input() description!: Description;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.updateDescription();
  }

  updateDescription(): void {
    interval(3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.description.description.length;
    });
  }
}
