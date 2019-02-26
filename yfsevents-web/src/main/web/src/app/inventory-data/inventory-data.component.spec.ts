import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDataComponent } from './inventory-data.component';

describe('InventoryDataComponent', () => {
  let component: InventoryDataComponent;
  let fixture: ComponentFixture<InventoryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
