import { createReducer, on } from '@ngrx/store';
import { showLoader, stopLoader } from './loader.actions';
import { loaderState } from './loader.state';

const loader_Reducer = createReducer(
  loaderState,

  on(showLoader, (state, action) => {
    return {
      ...state,
      showLoader: action.status,
    };
  }),
);

export function loaderReducer(state: any, action: any) {
  return loader_Reducer(state, action);
}
