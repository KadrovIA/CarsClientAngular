import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements  OnInit{
  myForm: FormGroup = new FormGroup({
    brandName: new FormControl(this.data?.brandName ?? '', Validators.required),
    brandColor: new FormControl(this.data?.brandColor ?? ''),
    brandCost: new FormControl(this.data?.brandCost ?? '', Validators.required),
    manufacturerName: new FormControl(this.data?.manufacturerName ?? '', Validators.required),
    manufacturerCountry: new FormControl(this.data?.manufacturerCountry ?? '', Validators.required),
  })

  constructor(
    public dialogRef: MatDialogRef<CreateBrandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(){
    this.data = {
      manufacturer: {
        name: this.myForm.value.manufacturerName,
        country: this.myForm.value.manufacturerCountry
      },
      name: this.myForm.value.brandName,
      color: this.myForm.value.brandColor,
      cost: this.myForm.value.brandCost
    };
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }
}
