import { createAction, props } from "@ngrx/store";

export const showLoader = createAction('showLoader',props<any>())

export const stopLoader = createAction('stopLoader',props<any>())