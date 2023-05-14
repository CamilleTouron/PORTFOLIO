import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { Header } from '../models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input() isFrench!: boolean;
  @Output() isFrenchChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  header: Header = new Header();

  constructor(private headerService: HeaderService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFrench'] && !changes['isFrench'].firstChange) {
      this.getHeader();
    }
  }

  ngOnInit(): void {
    this.getHeader();
  }

  getHeader(): void {
    if (this.isFrench) {
      this.headerService.getFrenchHeader().subscribe(
        (header: Header) => {
          this.header = header;
        },
        (error: any) => {
          console.error('Error retrieving French header:', error);
        }
      );
    } else {
      this.headerService.getEnglishHeader().subscribe(
        (header: Header) => {
          this.header = header;
        },
        (error: any) => {
          console.error('Error retrieving English header:', error);
        }
      );
    }
  }

  toggleIsFrench(): void {
    this.isFrenchChange.emit(this.isFrench);
    this.isFrench = !this.isFrench;
    this.getHeader();
  }
}
