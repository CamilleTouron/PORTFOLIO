import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Footer } from '../models/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private apiUrl = '../../assets/mocks/footer_';

  constructor(private http: HttpClient) { }

  getFrenchFooter(): Observable<Footer> {
    return this.http.get<Footer>(this.apiUrl + 'fr.json').pipe(
      map((footer: Footer) => footer)
    );
  }

  getEnglishFooter(): Observable<Footer> {
    return this.http.get<Footer>(this.apiUrl + 'en.json').pipe(
      map((footer: Footer) => footer)
    );
  }
}
