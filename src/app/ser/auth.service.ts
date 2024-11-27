import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(loginParams: any) {
    return this.httpClient
      .post(this.baseUrl + 'login', {
        email: loginParams.email,
        password: loginParams.password,
      })
      .pipe(
        map((res: any) => {
          localStorage.setItem('user', JSON.stringify(res?.obj?.user));
        })
      );
  }

  register(registerParams: any) {
    return this.httpClient
      .post(this.baseUrl + 'users', {
        name: registerParams.nombre,
        lastName: registerParams.apellido,
        email: registerParams.email,
        password: registerParams.password,
      })
      .pipe(
        map((res: any) => {
          localStorage.setItem('user', JSON.stringify(res?.obj));
        })
      );
  }
}
