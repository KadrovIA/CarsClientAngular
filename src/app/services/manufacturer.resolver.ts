import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IBrand} from "../models/manufacturers";
import {ManufacturersService} from "./manufacturers.service";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerResolver implements Resolve<IBrand[]> {
  constructor(private ManufacturersService: ManufacturersService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBrand[]> {
    return this.ManufacturersService.getBrandsByManufacturer(route.params?.['id'])
  }
}
