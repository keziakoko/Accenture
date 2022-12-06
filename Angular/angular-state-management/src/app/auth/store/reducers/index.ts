import {createReducer, on} from "@ngrx/store";
import {User} from "../../model/user.model";
import {AuthActions} from "../action-types";


export interface AuthState {
  user: User
}
// @ts-ignore
export const initialAuthState: AuthState = {
  user: {id:0, username:"", firstName: "",lastName: ""}
};

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
);
