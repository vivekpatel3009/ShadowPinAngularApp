import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetMappingComponent } from './fleet-mapping.component';

describe('FleetMappingComponent', () => {
  let component: FleetMappingComponent;
  let fixture: ComponentFixture<FleetMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
