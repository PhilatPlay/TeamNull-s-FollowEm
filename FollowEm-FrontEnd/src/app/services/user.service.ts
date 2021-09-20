import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
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
    UPDATE_USER: 'users/update',
    USER_AUTH: 'user/UserAuth'
  }

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(data: any){
    return 
    
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${this.BASEURL + this.ENDPOINTS.GET_USER}/${id}`)
  }

  // userLogin(email: string, password: string): Observable<User> {
  //   return this.http.get<User>(`http://localhost:8080/users/UserAuth/${email}&${password}`);
  // }
userLogin(data: any) {
  
  fetch(`http://localhost:8080/users/UserAuth?${data.email}&${data.password}`)
    .then(res => res.json())
    .then(x => {
      console.log(`GOT RESPONSE ${JSON.stringify(x)}`)     
      if(x.id && x.id > 0) {       
        localStorage.getItem('error') && localStorage.removeItem('error'); 
        localStorage.setItem('id', x.id);
        localStorage.setItem('name', x.name);
        this.router.navigate(['profile'])
        return;
      }else{
      localStorage.setItem('error', 'Invalid email/password');
      return this.router.navigate(['login'])
      }
    })
    .catch(err => {
     return localStorage.setItem('error', 'Error')
      
    })
}

  createUser(data: any){
    fetch('http://localhost:8080/users/add', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(x => {
      console.log(`GOT RESPONSE ${JSON.stringify(x)}`)
      if(x.id && x.id > 0) {
        localStorage.setItem('id', x.id);
        this.router.navigate(['login'])
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteUser(id: any) {
    return
  }

  updateUser(id: any, data: any) {
    return 
  }
}
