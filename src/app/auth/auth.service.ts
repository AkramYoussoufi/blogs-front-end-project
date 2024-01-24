import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register/RegisterPayload';
import { Observable } from 'rxjs';
import { environement } from '../environement';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(
      environement.apiURL + 'auth/signin',
      registerPayload
    );
  }
}
