import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteredOnlyGuard implements CanActivate {
  constructor (
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const name = window.localStorage.getItem('name')
    const iconUrl = window.localStorage.getItem('iconUrl')

    if (!name || !iconUrl ) {
      this.router.navigate(['login'])
      return false
    }
    return true
  }
  
}
