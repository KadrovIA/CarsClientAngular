import {Component, OnInit} from '@angular/core';
import {IManufacturer} from "../../models/manufacturers";
import {Subscription} from "rxjs";
import {ManufacturersService} from "../../services/manufacturers.service";

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit{
  manufacturers: IManufacturer[];
  manufacturersSubscription: Subscription;

  constructor(private ManufacturersService: ManufacturersService) { }

  ngOnInit(): void {
    this.manufacturersSubscription = this.ManufacturersService.getManufacturers().subscribe((data)=>{
      this.manufacturers = data;
    })
  }

  deleteManufacturer(id: number){
    this.ManufacturersService.deleteManufacturers(id).subscribe(() => this.manufacturers.find((item) =>{
      if(id===item.id){
        let idx = this.manufacturers.findIndex((data) => data.id === id)
        this.manufacturers.splice(idx,1)
      }
    }))
  }
  ngOnDestroy() {
    if(this.manufacturersSubscription) this.manufacturersSubscription.unsubscribe();
  }
}
