import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(public oidcSecurityServices: OidcSecurityService) {}
  token = this.oidcSecurityServices.getAccessToken();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .set('x-user-id', 'user1')
      .set('Authorization', 'Bearer ' + this.token);
    const request = req.clone({
      withCredentials: true,
    });
    return next.handle(request);
  }
}
