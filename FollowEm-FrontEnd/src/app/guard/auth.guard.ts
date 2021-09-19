import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor() {

  }
  canActivate(): boolean{
    if(localStorage.getItem('id')) {
      return true;
    }
    return false;
  }
}
