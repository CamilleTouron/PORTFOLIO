import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Footer } from '../models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  @Input() isFrench!: boolean;
  footerText: string = '';

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.getFooterText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFrench'] && !changes['isFrench'].firstChange) {
      this.getFooterText();
    }
  }

  getFooterText(): void {
    if (this.isFrench) {
      this.footerService.getFrenchFooter().subscribe(
        (footer: Footer) => {
          this.footerText = footer.text;
        },
        (error: any) => {
          console.error('Error retrieving French footer:', error);
        }
      );
    } else {
      this.footerService.getEnglishFooter().subscribe(
        (footer: Footer) => {
          this.footerText = footer.text;
        },
        (error: any) => {
          console.error('Error retrieving English footer:', error);
        }
      );
    }
  }
}
