import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isFrench: boolean;
  isAdmin: boolean;
  isConnected: boolean;

  constructor(private router: Router) {
    this.isFrench = true;
    this.isAdmin = false;
    this.isConnected = false;
  }

  ngOnInit(): void {
    this.checkIfAdmin();
  }

  toggleIsFrench(): void {
    this.isFrench = !this.isFrench;
  }

  private checkIfAdmin(): void {
    const currentUrl = window.location.href;
    this.isAdmin = currentUrl.includes('admin');
  }

  onIsConnectedChange(isConnected: boolean): void {
    this.isConnected = isConnected;
  }
}
