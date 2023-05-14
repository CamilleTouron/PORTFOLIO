import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-languagemode',
  templateUrl: './languagemode.component.html',
  styleUrls: ['./languagemode.component.scss']
})
export class LanguagemodeComponent {
  @Input() isFrench!: boolean;
  @Output() isFrenchChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleIsFrench(): void {
    this.isFrench = !this.isFrench;
    this.isFrenchChange.emit(this.isFrench);
  }
}
