import {
  CanActivate, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //call isAuthenticated to check user is login in our not
    return this.authService.isAuthenticated()
    //promise has then, if has response
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            
            this.router.navigate(['/routes/home']);
            alert('please login')
          }
        }
      );
  }
// for all child routes
  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
