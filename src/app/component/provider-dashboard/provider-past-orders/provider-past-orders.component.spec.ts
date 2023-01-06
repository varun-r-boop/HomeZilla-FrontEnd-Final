import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPastOrdersComponent } from './provider-past-orders.component';

describe('ProviderPastOrdersComponent', () => {
  let component: ProviderPastOrdersComponent;
  let fixture: ComponentFixture<ProviderPastOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPastOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPastOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
