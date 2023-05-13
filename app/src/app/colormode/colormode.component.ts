import { Component, AfterViewInit } from '@angular/core';
declare const $: any;  

@Component({
  selector: 'app-colormode',
  templateUrl: './colormode.component.html',
  styleUrls: ['./colormode.component.scss']
})
export class ColormodeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.setupColorModePreview();
  }

  setupColorModePreview(): void {
    $(document).ready(() => {  
      $("#color_mode").on("change", () => {  
        this.colorModePreview();
      });
    });
  }

  colorModePreview(): void {  
    if ($("#color_mode").prop("checked") == true) {
      $('body').addClass('dark-preview');
      $('body').removeClass('white-preview');
    } else if ($("#color_mode").prop("checked") == false) {
      $('body').addClass('white-preview');
      $('body').removeClass('dark-preview');
    }
    // TODO CHANGE SITE MODE COLOR
  }
}
