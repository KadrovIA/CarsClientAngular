import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManufacturerComponent} from "./components/manufacturer/manufacturer.component";
import {BrandsByManufacturerComponent} from "./components/brands-by-manufacturer/brands-by-manufacturer.component";
import {ManufacturerResolver} from "./services/manufacturer.resolver";

const routes: Routes = [
  {path: '', component: ManufacturerComponent},
  {path: 'Brand/:id', component: BrandsByManufacturerComponent, resolve: {data: ManufacturerResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
