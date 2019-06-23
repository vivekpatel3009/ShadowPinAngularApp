import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFleetComponent } from './manage-fleet.component';

describe('ManageFleetComponent', () => {
  let component: ManageFleetComponent;
  let fixture: ComponentFixture<ManageFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
