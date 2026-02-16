import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  loginAs(role: string) {
    this.authService.login(role);

    switch (role) {
      case 'RETAILER':
        this.router.navigate(['/retailer']);
        break;
      case 'FARMER':
        this.router.navigate(['/farmer']);
        break;
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
    }
  }
}