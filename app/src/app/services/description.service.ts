import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private apiUrl = '../../assets/mocks/';

  constructor(private http: HttpClient) { }

  getFrenchDescription(): Observable<Description> {
    return this.http.get<Description>(this.apiUrl + 'description_fr.json');
  }

  getEnglishDescription(): Observable<Description> {
    return this.http.get<Description>(this.apiUrl + 'description_en.json');
  }
}
