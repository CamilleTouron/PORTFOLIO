import { Injectable } from '@angular/core';
import { Footer } from '../../models/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private frenchFooter: Footer;
  private englishFooter: Footer;

  constructor() {
    this.frenchFooter = new Footer('© 2023 | Codé avec 💙 par Camille Touron');
    this.englishFooter = new Footer('© 2023 | Designed &amp; coded with 💙 by Camille Touron');
  }

  getFrenchFooter(): Footer {
    return this.frenchFooter;
  }

  getEnglishFooter(): Footer {
    return this.englishFooter;
  }
}
