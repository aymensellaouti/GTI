import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApi = 'http://localhost:3000/api/Users/login';
  logoutApi = 'http://localhost:3000/api/Users/login';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  login(credentials) {
    // const credentials = `{
    //   "email": "${email}",
    //   "password": "${pwd}"
    // }`;
    return this.http.post(this.loginApi, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }

}
