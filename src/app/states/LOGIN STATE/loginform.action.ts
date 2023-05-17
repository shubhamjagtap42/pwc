import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page]Login',
  props<{ username: string; password: string; token:string }>()
);

export const loginSuccess = createAction(
  '[API ]Login Success',
  props<{ username: string; password: string; token:string }>()
);

export const loginFailure = createAction(
  'Login Failure',
  props<{ error: string }>()
);
