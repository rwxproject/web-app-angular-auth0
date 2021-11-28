import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface HttpAppResponse {
  host: string;
  time: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpAppService {
  constructor(private http: HttpClient) {}

  getHttpApp() {
    return this.http.get<HttpAppResponse>(
      'https://system1.app.rwx.systems/user/api'
    );
  }

  getHttpCommon() {
    return this.http.get<HttpAppResponse>(
      'https://system1.app.rwx.systems/common/api'
    );
  }
}
