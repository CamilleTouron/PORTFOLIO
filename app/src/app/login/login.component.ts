import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;
  @Input() isConnected: boolean;
  @Output() isConnectedChange = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) {
    this.errorMessage = '';
    this.isConnected = false;
  }

  login(event: Event): void {
    event.preventDefault();
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    if (email === '' || password === '') {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.loginService.checkLogin(email, password).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          console.log('Login successful');
          this.errorMessage = '';
          this.isConnected = true;
          this.isConnectedChange.emit(true);
        } else {
          this.errorMessage = 'Invalid email or password';
          this.isConnected = false;
          this.isConnectedChange.emit(false);
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
