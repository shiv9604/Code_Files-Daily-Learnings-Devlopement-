import { state } from "@angular/animations"
import { createReducer, INITIAL_STATE, on } from "@ngrx/store"
import { addPost, customIncrement, decrement, deletePost, increment, reset, updatePost } from "./counter.actions"
import { counterState } from "./counter.state"



const counterReducer = createReducer(counterState,
    on(increment,(res:any)=>{
        return {
            ...res,
            counter: res.counter+1,
        }
    }),
    on(decrement,(res:any)=>{
        return {
            ...res,
            counter:res.counter-1,

        }
    }),
    on(reset,(res:any)=>{
        return {
            ...res,
            counter:0,
        }
    }),
    on(customIncrement,(res:any,data:any)=>{
        return {
            ...res,
            counter: res.counter + data.data    
        }
    }),
    on(addPost,(stateObj:any,data:any)=>{

        // Removing type with destrucuturing
        const { type,...restObj} = data
        restObj.id = stateObj.posts.length + 1
        restObj.name = `${restObj.name} ${restObj.id}`
        return {
            ...stateObj,
            posts:[...stateObj.posts,restObj]
        }
    }),
    on(updatePost,(stateObj:any,{updated})=>{
        const updatedPosts = stateObj.posts.map((item)=>{
            return item.id==updated.id ?  item = updated : item
        })
        console.log("Data got in update Post =>",updatedPosts)
        return {
            ...stateObj,
            posts:[...updatedPosts]
        }
    }),
    on(deletePost,(state:any,data:any)=>{
        console.log("Data Recieved in deletePost =>",data.id)
        let postsAfterDeletion = state.posts.filter((item:any)=>{
            if(item.id!=data.id){
                return true
            }
            else{
                return false
            }
        })

        
        console.log("Posts after deletion =>",postsAfterDeletion)
        return { 
            ...state,
            posts:[...postsAfterDeletion]
        }
    })
)

export function counter_reducer(state,action){
    return counterReducer(state,action)
}

