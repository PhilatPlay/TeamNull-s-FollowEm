import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private ENDPOINTS = {
    REGISTER_URL: 'abc',
    LOGIN_URL: 'abc'
  }

  constructor(private http: HttpClient) { }
  register(data: any) {
    console.log(data);
  }
  login(data: any) {
    console.log(`Data: ${data}`);
    this.http.post<any>(this.ENDPOINTS.LOGIN_URL, data)
  }
}
