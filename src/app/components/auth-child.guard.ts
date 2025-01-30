import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authChildGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isLoggedUser = localStorage.getItem("user");

if(!isLoggedUser){
router.navigateByUrl('login');
return false;
}
  return true;
};
