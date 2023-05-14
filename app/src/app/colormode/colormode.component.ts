import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColorMode } from '../../models/colormode';

@Component({
  selector: 'app-colormode',
  templateUrl: './colormode.component.html',
  styleUrls: ['./colormode.component.scss']
})
export class ColormodeComponent {
  @Input() colorMode!: ColorMode;
  @Input() isLight!: boolean;
  @Output() themeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isLightChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleIsLight(): void {
    this.isLight = !this.isLight;
    this.isLightChange.emit(this.isLight);
    this.themeChange.emit(this.isLight);
  }

  changeTheme(isLight: boolean): void {
    this.themeChange.emit(isLight);
  }
}
