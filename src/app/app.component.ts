import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule], // Adicionando CommonModule para suportar *ngIf
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    const loggedIn = this.authService.isLoggedIn();
    console.log('Usuário está logado:', loggedIn); // Adicionando log
    return loggedIn;
  }
}
