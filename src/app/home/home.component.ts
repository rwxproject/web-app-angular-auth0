import { Component, OnInit } from '@angular/core';
import {
  OidcClientNotification,
  OidcSecurityService,
  OpenIdConfiguration,
  UserDataResult,
} from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { HttpAppService } from '../http-app.service';

type HttpApp = {
  host: string;
  time: string;
  userId: string;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  configuration: OpenIdConfiguration;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<UserDataResult>;
  isAuthenticated = false;
  idToken = '';
  accessToken = '';
  commonHost = '';
  commonTime = '';

  constructor(
    public oidcSecurityService: OidcSecurityService,
    private httpAppService: HttpAppService
  ) {}

  ngOnInit() {
    this.configuration = this.oidcSecurityService.getConfiguration();
    this.userData$ = this.oidcSecurityService.userData$;

    this.oidcSecurityService.isAuthenticated$.subscribe(
      ({ isAuthenticated }) => {
        this.isAuthenticated = isAuthenticated;

        console.warn('authenticated: ', isAuthenticated);
      }
    );
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  refreshSession() {
    this.oidcSecurityService
      .forceRefreshSession()
      .subscribe((result) => console.log(result));
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  logoffAndRevokeTokens() {
    this.oidcSecurityService
      .logoffAndRevokeTokens()
      .subscribe((result) => console.log(result));
  }

  revokeRefreshToken() {
    this.oidcSecurityService
      .revokeRefreshToken()
      .subscribe((result) => console.log(result));
  }

  revokeAccessToken() {
    this.oidcSecurityService
      .revokeAccessToken()
      .subscribe((result) => console.log(result));
  }

  getToken() {
    // const token = this.oidcSecurityService.getAccessToken();
    // console.log(token);
    // window.location.href = 'https://google.com/about';
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ idToken, accessToken }) => {
        this.idToken = idToken;
        console.log('idToken: ', this.idToken);
        console.log('accessToken: ', this.accessToken);
      });
  }

  getHttpUser() {}

  getHttpCommon() {
    this.httpAppService.getHttpCommon().subscribe((response: HttpApp) => {
      this.commonHost = response.host;
      this.commonTime = response.time;
    });
  }
}
