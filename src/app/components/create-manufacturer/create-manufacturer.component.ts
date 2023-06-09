import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.scss']
})
export class CreateManufacturerComponent implements OnInit{
  myFormManufacturer: FormGroup = new FormGroup({
    manufacturerName: new FormControl(this.data?.manufacturerName ?? '', Validators.required),
    manufacturerCountry: new FormControl(this.data?.manufacturerCountry ?? '', Validators.required),
  })

  constructor(
    public dialogRef: MatDialogRef<CreateManufacturerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(){
    this.data = {
      name: this.myFormManufacturer.value.manufacturerName,
      country: this.myFormManufacturer.value.manufacturerCountry
    };
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }
}
