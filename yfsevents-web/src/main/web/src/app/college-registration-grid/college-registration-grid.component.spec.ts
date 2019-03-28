import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeRegistrationGridComponent } from './college-registration-grid.component';

describe('CollegeRegistrationGridComponent', () => {
  let component: CollegeRegistrationGridComponent;
  let fixture: ComponentFixture<CollegeRegistrationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeRegistrationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeRegistrationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
