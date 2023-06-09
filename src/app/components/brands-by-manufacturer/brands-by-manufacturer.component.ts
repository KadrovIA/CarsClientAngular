import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {IBrand} from "../../models/manufacturers";
import {ManufacturersService} from "../../services/manufacturers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-brands-by-manufacturer',
  templateUrl: './brands-by-manufacturer.component.html',
  styleUrls: ['./brands-by-manufacturer.component.scss']
})
export class BrandsByManufacturerComponent implements OnInit{
  brands: IBrand[];
  manufacturerSubscription: Subscription;
  constructor(private ManufacturersService: ManufacturersService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.manufacturerSubscription = this.route.data.subscribe((data) => {
      this.brands = data['data'];
    })
  }

  deleteBrand(id: number){
    this.ManufacturersService.deleteBrands(id).subscribe(() => this.brands.find((item) =>{
      if(id===item.id){
        let idx = this.brands.findIndex((data) => data.id === id)
        this.brands.splice(idx,1)
      }
    }))
  }

}
