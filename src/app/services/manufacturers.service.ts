import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBrand, IManufacturer} from "../models/manufacturers";

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {

  url: string = 'https://localhost:7197/api'
  constructor(private http: HttpClient) { }

  getManufacturers (){
    return this.http.get<IManufacturer[]>(`${this.url}/Manufacturer`);
  }

  getBrandsByManufacturer(id: number) {
    return this.http.get<IBrand[]>(`${this.url}/Brand/${id}`);
  }

  postBrand(brand: IBrand){
    return this.http.post<IBrand>(`${this.url}/Brand`, brand);
  }

  postManufacturer(manufacturer: IManufacturer){
    return this.http.post<IManufacturer>(`${this.url}/Manufacturer`, manufacturer);
  }

  deleteBrands(id: number){
    return this.http.delete<any>(`${this.url}/Brand/${id}`);
  }

  deleteManufacturers(id: number){
    return this.http.delete<any>(`${this.url}/Manufacturer/${id}`);
  }
}
