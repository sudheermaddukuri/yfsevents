import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerNGOComponent } from './partner-ngo.component';

describe('PartnerNGOComponent', () => {
  let component: PartnerNGOComponent;
  let fixture: ComponentFixture<PartnerNGOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerNGOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
