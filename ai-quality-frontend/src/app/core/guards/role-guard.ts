import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const RoleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const expectedRole = route.data?.['role'];
  const userRole = authService.getRole();

  return userRole === expectedRole;
};
