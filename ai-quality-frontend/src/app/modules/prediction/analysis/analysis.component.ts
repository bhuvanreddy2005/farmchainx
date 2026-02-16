import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {

  cropName: string = 'Tomato';
  grade: 'A' | 'B' | 'C' = 'A';
  confidence: number = 92;

  qualityDetails = {
    moisture: '78%',
    size: 'Medium',
    defects: 'Low'
  };

}