import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMappingComponent } from './vehicle-mapping.component';

describe('VehicleMappingComponent', () => {
  let component: VehicleMappingComponent;
  let fixture: ComponentFixture<VehicleMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
