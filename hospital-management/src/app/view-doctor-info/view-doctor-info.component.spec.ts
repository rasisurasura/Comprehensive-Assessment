import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorInfoComponent } from './view-doctor-info.component';

describe('ViewDoctorInfoComponent', () => {
  let component: ViewDoctorInfoComponent;
  let fixture: ComponentFixture<ViewDoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
