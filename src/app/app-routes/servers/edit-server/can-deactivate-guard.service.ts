import { Observable } from 'rxjs';
import { CanDeactivate,
         ActivatedRouteSnapshot,
        RouterStateSnapshot 
      } from '@angular/router';

      // were are giving interface, so logic can implemnt on the component , check edit-server
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// implements, inteface to call we canDeactivate gurads call to run CanComponentDeactivate
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate,     // to return CanComponentDeactivate value
                currentRoute: ActivatedRouteSnapshot,  // get activated route
                currentState: RouterStateSnapshot,     // current dtaet of route
                nextState?: RouterStateSnapshot        // optional what is next stare of route
                ): Observable<boolean> | Promise<boolean> | boolean { // to work with asycn data

                  //return CanComponentDeactivate, which is implemnt in component , if they retrun tru can leave route, or some action
                  //like use nextrstate or alert
    return component.canDeactivate();
  }
}
