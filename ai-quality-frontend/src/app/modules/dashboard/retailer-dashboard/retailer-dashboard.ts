import { Component } from '@angular/core';

@Component({
  selector: 'app-retailer-dashboard',
  templateUrl: './retailer-dashboard.html',
  styleUrls: ['./retailer-dashboard.css']
})
export class RetailerDashboardComponent {

  totalAnalysed = 40;
  pending = 5;
  crops = ['Tomato', 'Potato', 'Rice'];
}