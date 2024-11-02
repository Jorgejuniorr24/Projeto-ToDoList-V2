// src/app/auth.config.ts

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // URL do provedor OAuth 2.0
  redirectUri: window.location.origin,    // Redireciona após login
  clientId: 'SUA_CLIENT_ID',              // Substitua com seu Client ID do provedor
  responseType: 'token',
  scope: 'openid profile email',          // Escopos necessários
  showDebugInformation: true,
};
