import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCurrentOrderComponent } from './c-current-order.component';

describe('CCurrentOrderComponent', () => {
  let component: CCurrentOrderComponent;
  let fixture: ComponentFixture<CCurrentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCurrentOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
