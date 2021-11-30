import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    /**
    if (!this.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    if (route.url.toString() === 'adminUserList') {
      if (this.user.role !== 3){
        return false;
      }
    }**/
    return true;
  }
}
