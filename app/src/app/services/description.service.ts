import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Description } from '../models/description';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private apiUrl = '/assets/mocks/';

  constructor(private http: HttpClient) { }

  getFrenchDescription(): Observable<Description> {
    return this.http.get<Description>(this.apiUrl + 'description_fr.json');
  }

  getEnglishDescription(): Observable<Description> {
    return this.http.get<Description>(this.apiUrl + 'description_en.json');
  }

  modifyFrenchDescription(name: string, description: string[]): void {
    const modifiedDescription = { name, description };
    const jsonContent = JSON.stringify(modifiedDescription);
    this.saveJsonFile('description_fr.json', jsonContent);
  }

  modifyEnglishDescription(name: string, description: string[]): void {
    const modifiedDescription = { name, description };
    const jsonContent = JSON.stringify(modifiedDescription);
    this.saveJsonFile('description_en.json', jsonContent);
  }

  private saveJsonFile(filename: string, content: string): void {
    const blob = new Blob([content], { type: 'application/json' });
    saveAs(blob, filename);
  }
}
