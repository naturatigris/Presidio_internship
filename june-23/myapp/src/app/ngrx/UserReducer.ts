import { createReducer,on} from "@ngrx/store";
import { initialUserState } from "./userState";
import * as UserActions from "./users.actions";
import { UserModel } from "../models/usermodel";


export const userReducer = createReducer(initialUserState,
    on(UserActions.loadUsers,state=>({...state, loading: true, error: null })),
    on(UserActions.loadUsersSuccess, (state,{users})=>({...state, users, loading: false, error: null })),
    on(UserActions.loadUsersFailure, (state,{error})=>({...state, loading: false, error })),
    on(UserActions.addUSer, (state,{user})=>({...state, users: [...state.users, user], loading: false, error: null })),
)