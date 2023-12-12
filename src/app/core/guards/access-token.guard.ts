import { CanActivateFn } from '@angular/router';

export const accessTokenGuard: CanActivateFn = (route, state) => {
  console.log(route, state);

  return true;
};
