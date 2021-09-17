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
    GET_USER: 'users',
    ADD_USER: 'users/add',
    DELETE_USER: 'users/delete',
    UPDATE_USER: 'users/update'
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>(
      `${this.BASEURL + this.ENDPOINTS.GET_USER}`
    )
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(
      `${this.BASEURL + this.ENDPOINTS.GET_USER}/${id}`
    );
  }

  createUser(data: User): Observable<User>{
    return this.http.post<User>(
      `${this.BASEURL + this.ENDPOINTS.ADD_USER}`, data
    )
  }

  deleteUser(id: any): Observable<User> {
    return this.http.delete<User>(
      `${this.BASEURL + this.ENDPOINTS.DELETE_USER}/${id}`
    )
  }

  updateUser(id: any, data: User): Observable<User> {
    return this.http.put<User>(
      `${this.BASEURL + this.ENDPOINTS.UPDATE_USER}/${id}`, data
    )
  }
}
