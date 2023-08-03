import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment')

export const decrement = createAction('decrement')

export const reset = createAction('reset')

export const customIncrement = createAction('customIncrement',props<any>())

export const addPost = createAction('addPost',props<any>())

export const updatePost = createAction('updatePost',props<any>())

export const deletePost = createAction('deletePost',props<any>())

