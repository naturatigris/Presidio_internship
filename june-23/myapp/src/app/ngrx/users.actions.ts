import { createAction, props } from "@ngrx/store";
import { UserModel } from "../models/usermodel";



export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success',props<{ users: UserModel[] }>());
export const addUSer = createAction('[Users]Add User',props<{ user: UserModel }>());
export const loadUsersFailure = createAction('[Users] Load Users Failure',props<{ error: string }>());