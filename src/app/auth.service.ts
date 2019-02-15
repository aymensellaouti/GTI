import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApi = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(credentials) {
    // const credentials = `{
    //   "email": "${email}",
    //   "password": "${pwd}"
    // }`;
    return this.http.post(this.loginApi, credentials);
  }
}
