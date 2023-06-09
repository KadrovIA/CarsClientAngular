import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateBrandComponent} from "../../create-brand/create-brand.component";
import {CreateManufacturerComponent} from "../../create-manufacturer/create-manufacturer.component";
import {IBrand, IManufacturer} from "../../../models/manufacturers";
import {ManufacturersService} from "../../../services/manufacturers.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  brands: IBrand[];
  manufacturers: IManufacturer[];
  manufacturersSubscription: Subscription;
  constructor(private ManufacturersService: ManufacturersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.manufacturersSubscription = this.ManufacturersService.getManufacturers().subscribe((data)=>{
      this.manufacturers = data;


    })
  }

  openDialogBrand(brand?: IBrand): void {
    const dialogRef = this.dialog.open(CreateBrandComponent,{
      width: '500px',
      disableClose: true,
      data : brand
    });

    dialogRef.afterClosed().subscribe((data) => {this.postDataBrand(data)})
  }

  openDialogManufacturer(manufacturer?: IManufacturer): void {
    const dialogRef = this.dialog.open(CreateManufacturerComponent,{
      width: '500px',
      disableClose: true,
      data : manufacturer
    });

    dialogRef.afterClosed().subscribe((data) => {this.postDataManufacturer(data)})
  }

  postDataBrand(data: IBrand) {
    this.ManufacturersService.postBrand(data).subscribe((data) => this.brands.push(data));
  }

  postDataManufacturer(data: IManufacturer) {
    this.ManufacturersService.postManufacturer(data).subscribe((data) => this.manufacturers.push(data));
  }
}

