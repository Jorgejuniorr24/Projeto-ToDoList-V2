import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { authConfig, oAuthModuleConfig } from './auth.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideOAuthClient({
      ...authConfig,       // Configurações de autenticação
      resourceServer: {    // Configura o resourceServer necessário
        allowedUrls: ['http://localhost:3000'],
        sendAccessToken: true,
      },
    }),
  ],
};
