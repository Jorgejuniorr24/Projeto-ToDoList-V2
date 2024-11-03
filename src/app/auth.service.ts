import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      console.log('Login process finished. Is logged in:', this.isLoggedIn());
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
      console.log('Executando logout...'); // Log ao iniciar o logout
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
