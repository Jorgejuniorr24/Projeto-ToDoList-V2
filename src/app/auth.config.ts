import { AuthConfig, OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-1hm0dprkatnixwrc.us.auth0.com/', // Domínio Auth0
  redirectUri: window.location.origin,
  clientId: 'Kck1yI3aXIBhPxSqXyEC6Jk2qUdh77yW', // Substitua com seu Client ID
  responseType: 'code', // Altere para 'code'
  scope: 'openid profile email',
  showDebugInformation: true,
  // audience: 'https://your-api-identifier' // Descomente e configure se necessário
};

export const oAuthModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['http://localhost:3000'], // URL da sua API
    sendAccessToken: true,
  },
};
