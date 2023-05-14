import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Header } from '../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = '../../assets/mocks/header_';

  constructor(private http: HttpClient) { }

  getFrenchHeader(): Observable<Header> {
    return this.http.get<Header>(this.apiUrl + 'fr.json');
  }

  getEnglishHeader(): Observable<Header> {
    return this.http.get<Header>(this.apiUrl + 'en.json');
  }
}
