import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Current } from '../models/current';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
  private apiUrl = '../../assets/mocks/current_';

  constructor(private http: HttpClient) { }

  getFrenchCurrent(): Observable<Current> {
    return this.http.get<Current>(this.apiUrl + 'fr.json').pipe(
      map((current: Current) => current)
    );
  }

  getEnglishCurrent(): Observable<Current> {
    return this.http.get<Current>(this.apiUrl + 'en.json').pipe(
      map((current: Current) => current)
    );
  }
}
