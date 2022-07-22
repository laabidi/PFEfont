import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuarduserService implements CanActivate{

  constructor() { }
  canActivate() {
    if (
      localStorage.getItem("AuthAuthorities")?.includes(null) ||
      localStorage.getItem("AuthAuthorities") == undefined ||
      localStorage.getItem("AuthAuthorities")?.includes("RESPONSABLE")
    ) {
      
      // this.router.navigate(["/auth"]);
      return false;
    }
    return true;
  }
}
