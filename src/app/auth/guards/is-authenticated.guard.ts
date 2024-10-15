import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthStatus } from '../interfaces';

import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

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
    return true;
    
  } 

/*   if (authService.authStatus() === AuthStatus.checking) {
    console.log({status: authService.authStatus()});
    console.log('isAuthenticatedGuard');
    console.log({ route, state });
    return false;
  } */
  
  router.navigate(['/auth/login']);

  return false;
};
