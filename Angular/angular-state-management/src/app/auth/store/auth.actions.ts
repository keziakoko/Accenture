import {createAction, props} from "@ngrx/store";
import {User} from "../model/user.model";

export const login = createAction("[Auth] Validate Login", props<{ user: User }>());


