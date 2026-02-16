import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDashboard } from './retailer-dashboard';

describe('RetailerDashboard', () => {
  let component: RetailerDashboard;
  let fixture: ComponentFixture<RetailerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
