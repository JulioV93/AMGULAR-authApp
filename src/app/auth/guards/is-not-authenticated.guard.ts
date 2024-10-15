import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';
import { inject } from '@angular/core';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  /* 
  Ejemplo de uso de localStorage para guardar la URL actual
  const url = state.url;
  localStorage.setItem('url', url);
  console.log({ url }); */

  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.authStatus() === AuthStatus.authenticated) {
    
    console.log({status: authService.authStatus()});
    console.log('isAuthenticatedGuard');
    console.log({ route, state });
    router.navigate(['/dashboard']);
    return false;
    
  } 
  
  return true;
};
