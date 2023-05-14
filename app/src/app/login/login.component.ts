import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;

  constructor(private loginService: LoginService) {
    this.errorMessage = '';
  }

  login(event: Event): void {
    event.preventDefault();
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log('Email:', email);
    console.log('Password:', password);
    if (email === '' || password === '') {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.loginService.checkLogin(email, password).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          console.log('Login successful');
          this.errorMessage = '';
          //todo redirection
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      (error: any) => {
        console.error('Error checking login:', error);
      },
      () => {
      }
    );
  }
}
