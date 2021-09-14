import { Injectable } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loggedIn(): boolean {
    return false;
  }
}
