import { Injectable } from '@angular/core';
import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private frenchDescription: Description;
  private englishDescription: Description;

  constructor() {
    this.frenchDescription = new Description(
      'Bonjour, je suis',
      ['Camille', 'Touron', 'Géniale']
    );

    this.englishDescription = new Description(
      'Hello, I am',
      ['Camille', 'Touron', 'Awesome']
    );
  }

  getFrenchDescription(): Description {
    return this.frenchDescription;
  }

  getEnglishDescription(): Description {
    return this.englishDescription;
  }
}
