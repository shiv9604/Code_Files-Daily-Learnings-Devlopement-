import { createFeatureSelector, createSelector } from "@ngrx/store";


export const store = createFeatureSelector('counter')

export const name = createSelector(store,(storeObj)=>{
    return storeObj['name']
})

export const counter = createSelector(store,(storeObj)=>{
    return storeObj['counter']
})
export const Posts = createSelector(store,(stateObj)=>{
    return stateObj['posts']
})

export const getSinglePost = createSelector(store,(stateObj,action)=>{
    // console.log("Data Got in getSinglePost selector =>",action)
    return stateObj['posts'][action]
})