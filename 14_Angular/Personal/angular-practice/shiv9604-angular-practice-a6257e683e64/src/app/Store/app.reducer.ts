import { routerReducer } from "@ngrx/router-store";
import { counter_reducer } from "../counter/State/counter.reducer";
import { loaderReducer } from "../shared/loader/loader.reducers";

export const appReducer = {
    counter:counter_reducer,
    loader:loaderReducer,
    router:routerReducer
}