import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCurrentOrdersComponent } from './provider-current-orders.component';

describe('ProviderCurrentOrdersComponent', () => {
  let component: ProviderCurrentOrdersComponent;
  let fixture: ComponentFixture<ProviderCurrentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCurrentOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderCurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
