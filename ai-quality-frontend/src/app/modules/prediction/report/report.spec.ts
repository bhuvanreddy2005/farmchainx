import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';
import { QRCodeModule } from 'angularx-qrcode';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportComponent, QRCodeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
