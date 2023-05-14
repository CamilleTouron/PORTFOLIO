import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColorMode } from '../../models/colormode';
import { Header } from 'src/models/header';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() colorMode!: ColorMode;
  @Input() isFrench!: boolean;
  @Output() isFrenchChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private headerService: HeaderService) {
    console.log(this.isFrench)
  }

  getHeader(): Header {
    return this.isFrench ? this.headerService.getFrenchHeader() : this.headerService.getEnglishHeader();
  }

  toggleIsFrench(): void {
    this.isFrenchChange.emit(this.isFrench);
  }
}
