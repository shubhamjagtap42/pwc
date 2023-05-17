import { createReducer, on } from '@ngrx/store';
import { LoginState } from './loginform.state';
import { login, loginSuccess, loginFailure } from './loginform.action';
import { state } from '@angular/animations';

export const initialState: LoginState = {
  isLoggedIn: false,
  username: '',
  token: '',
  error: '',
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => state),
  on(loginSuccess, (state, { username, token }) => ({
    ...state,
    isLoggedIn: true,
    username,
    token,
    error: '',
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    username: '',
    password: '',
    error,
  }))
);
