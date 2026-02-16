import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(role: string) {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
  }
}