import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessComponent } from './roleaccess.component';

describe('RoleAccessComponent', () => {
  let component: RoleAccessComponent;
  let fixture: ComponentFixture<RoleAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
