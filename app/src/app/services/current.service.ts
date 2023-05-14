import { Injectable } from '@angular/core';
import { Current } from '../models/current';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
  private frenchCurrent: Current;
  private englishCurrent: Current;

  constructor() {
    this.frenchCurrent = new Current(
      'Actuellement...',
      'En apprentissage',
      '',
      '',
      ''
    );

    this.englishCurrent = new Current(
      'Currently...',
      'In apprenticeship',
      '',
      '',
      ''
    );
  }

  getFrenchCurrent(): Current {
    return this.frenchCurrent;
  }

  getEnglishCurrent(): Current {
    return this.englishCurrent;
  }
}
