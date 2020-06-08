import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencypackageComponent } from './agencypackage.component';

describe('AgencypackageComponent', () => {
  let component: AgencypackageComponent;
  let fixture: ComponentFixture<AgencypackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencypackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
