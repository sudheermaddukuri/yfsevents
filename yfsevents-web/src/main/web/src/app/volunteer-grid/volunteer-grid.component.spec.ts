import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerGridComponent } from './volunteer-grid.component';

describe('VolunteerGridComponent', () => {
  let component: VolunteerGridComponent;
  let fixture: ComponentFixture<VolunteerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
