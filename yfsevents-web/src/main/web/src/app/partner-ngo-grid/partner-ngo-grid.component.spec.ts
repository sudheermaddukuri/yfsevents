import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerNgoGridComponent } from './partner-ngo-grid.component';

describe('PartnerNgoGridComponent', () => {
  let component: PartnerNgoGridComponent;
  let fixture: ComponentFixture<PartnerNgoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerNgoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerNgoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
