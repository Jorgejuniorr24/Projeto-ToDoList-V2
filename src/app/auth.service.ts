import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.isLoggedIn()) {
        // Redireciona para a rota do componente shopping-list após login bem-sucedido
        this.router.navigate(['/shopping-list']);
      }
    }).catch(error => {
      console.error('Erro ao carregar o documento de descoberta:', error);
    });
  }

  login() {
    try {
      this.oauthService.initLoginFlow();
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao tentar autenticar. Tente novamente mais tarde.');
    }
  }

  logout() {
    try {
      this.oauthService.logOut();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao sair da conta. Tente novamente mais tarde.');
    }
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get userProfile(): any {
    return this.oauthService.getIdentityClaims() || {};
  }
}
