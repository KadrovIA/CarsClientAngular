import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsByManufacturerComponent } from './brands-by-manufacturer.component';

describe('BrandsByManufacturerComponent', () => {
  let component: BrandsByManufacturerComponent;
  let fixture: ComponentFixture<BrandsByManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsByManufacturerComponent]
    });
    fixture = TestBed.createComponent(BrandsByManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
