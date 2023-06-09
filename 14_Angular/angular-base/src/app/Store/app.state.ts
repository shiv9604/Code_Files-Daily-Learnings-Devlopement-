import { loaderState } from '../shared/loader/Store/loader.state';

export const appState = {
  loader: loaderState,
};

export interface AppState {
  loader: boolean;
}
