import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface canComponentDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const authDeactivateGuard: CanDeactivateFn<canComponentDeactivate> = (component: canComponentDeactivate, currentRoute, currentState, nextState) => {
  
  return component.canDeactivate ? component.canDeactivate() : true;
};
