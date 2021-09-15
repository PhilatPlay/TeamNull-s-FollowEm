import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASEURL='http://localhost:8080/';
  private ENDPOINTS = {
    MYFOLLOWS: 'myfollows', // - /myfollows/? returns list of user IDs that ? follows
    USER: 'user'
  }

  constructor(private http: HttpClient) { }

  getFollows(id: any): Observable<number[]>{
    return this.http.get<number[]>(
      `${this.BASEURL + this.ENDPOINTS.MYFOLLOWS}/${id}`
    );
  }

  //TODO possibly fix this
  getUserById(id: any): Observable<User> {
    return this.http.get<User>(
      `${this.BASEURL + this.ENDPOINTS.USER}/${id}`
    );
  }
}
