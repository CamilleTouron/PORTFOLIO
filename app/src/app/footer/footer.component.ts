import { Component, Input } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isFrench!: boolean;

  constructor(private footerService: FooterService) { }

  getFooterText(): string {
    return this.isFrench
      ? this.footerService.getFrenchFooter().text
      : this.footerService.getEnglishFooter().text;
  }
}
