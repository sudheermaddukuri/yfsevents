import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectablevolunteerComponent } from './selectablevolunteer.component';

describe('SelectablevolunteerComponent', () => {
  let component: SelectablevolunteerComponent;
  let fixture: ComponentFixture<SelectablevolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectablevolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectablevolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
