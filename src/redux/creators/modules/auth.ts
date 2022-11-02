import { put } from "@redux-saga/core/effects";
import produce from "immer";
import { isEmpty } from "lodash";

import { SagaCreator } from "interfaces/redux";
import ReducerInterface from "interfaces/reducerInterface";
import AuthService from "services/authService";
//! Actions
export const authActions = {
  login: "login",
  checkAuth: "checkAuth",
  loginSuccess: "loginSuccess",
  loginFailed: "loginFailed",
  logout: "logout",
};

//! Sagas
export const authSaga = {
  [authActions.login]: {
    saga: function* ({ payload }) {
      const { username, password } = payload;

      if (username === "admin" && password === "admin") {
        yield AuthService.saveUserToLocalStorage({ username: "admin", password: "admin" });
        yield put({ type: authActions.loginSuccess });
      } else {
        yield put({ type: authActions.loginFailed });
      }
    },
  },
  [authActions.checkAuth]: {
    saga: function* () {
      const dataUser = AuthService.getUserLocalStorage();
      if (!isEmpty(dataUser)) {
        yield put({ type: authActions.login, payload: dataUser });
      } else {
        yield put({ type: authActions.loginFailed });
      }
    },
  },
  [authActions.logout]: {
    saga: function* () {
      yield AuthService.clearUserLocalStorage();
      yield put({ type: authActions.loginFailed });
    },
  },
} as SagaCreator;

//! Reducers
export const authReducer = (
  state = {
    auth: {
      isLogin: false,
      error: null,
    },
  },
  action: ReducerInterface
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case authActions.loginSuccess: {
        draftState.auth.isLogin = true;
        break;
      }

      case authActions.loginFailed: {
        draftState.auth.isLogin = false;
        break;
      }

      default:
        break;
    }
  });
};
