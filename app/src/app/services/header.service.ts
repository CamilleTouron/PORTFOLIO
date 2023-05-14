import { Injectable } from '@angular/core';
import { Header } from '../../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private frenchHeader: Header;
  private englishHeader: Header;

  constructor() {
    this.frenchHeader = new Header();
    this.frenchHeader.brand = 'Camille Touron';
    this.frenchHeader.about = 'À propos';
    this.frenchHeader.current = 'Actuel';
    this.frenchHeader.toolbox = 'Boîte à outils';
    this.frenchHeader.projects = 'Projets';
    this.frenchHeader.contact = 'Contact';

    this.englishHeader = new Header();
    this.englishHeader.brand = 'Camille Touron';
    this.englishHeader.about = 'About';
    this.englishHeader.current = 'Current';
    this.englishHeader.toolbox = 'Toolbox';
    this.englishHeader.projects = 'Projects';
    this.englishHeader.contact = 'Contact';
  }

  getFrenchHeader(): Header {
    return this.frenchHeader;
  }

  getEnglishHeader(): Header {
    return this.englishHeader;
  }
}
