
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot
 } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeFlowGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('userName') !== '') {
            return true;
        } else {
          this.router.navigate(['/register']);
            return false;
        }
    }
}

@Injectable()
export class RegisterFlowGuard implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            return true;
    }
}
