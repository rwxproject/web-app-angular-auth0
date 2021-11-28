import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://rwx.auth0.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'dk4mZCKYYJocaCwv8jRnoqovBK7WSLbv',
        scope: 'openid profile offline_access auth0-user-api-spa',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        customParamsAuthRequest: {
          // audience: 'https://auth0-api-spa',
        },
        customParamsRefreshTokenRequest: {
          scope: 'openid profile offline_access auth0-user-api-spa',
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
