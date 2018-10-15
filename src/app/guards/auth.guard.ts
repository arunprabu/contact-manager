import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      //check for session
      // if yes 
        //redirect to dashboard
        //this.router.navigateByUrl('dashboard')
        //return true 
      //else
        //redirect if no access
        //this.router.navigateByUrl('login')
        //return false;
    
    return true;
  }
}
