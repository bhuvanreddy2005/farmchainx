import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, QRCodeComponent],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  qrData = 'AI Quality Report Generated Successfully';
}