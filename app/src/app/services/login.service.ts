import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'assets/mocks/login.json';

  constructor(private http: HttpClient) { }

  getLogin(): Observable<Login> {
    return this.http.get<Login>(this.apiUrl);
  }

  checkLogin(email: string, password: string): Observable<boolean> {
    return this.getLogin().pipe(
      map((login: Login) => {
        return login.email === email && login.password === password;
      })
    );
  }
}
