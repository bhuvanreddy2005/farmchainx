import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    this.router.navigate(['/report'], { queryParams: { role } });
  }
}