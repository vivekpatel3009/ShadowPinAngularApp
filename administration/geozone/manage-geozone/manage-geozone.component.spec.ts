import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGeozoneComponent } from './manage-geozone.component';

describe('ManageGeozoneComponent', () => {
  let component: ManageGeozoneComponent;
  let fixture: ComponentFixture<ManageGeozoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGeozoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGeozoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
