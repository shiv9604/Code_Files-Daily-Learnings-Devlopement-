# ngRX

NgRx is a framework for building reactive applications in Angular. NgRx is inspired by the Redux pattern - unifying the events in your application and deriving state using RxJS. At a high level, NgRx stores a single state and uses actions to express state changes.

### Why to use ngRx (Applications)

Normally we control the data flow , data interaction (state) in the application with the help of services.

When the application gets bigger and bigger its tidious job for data interaction in between the components soo we by using ngRx all the components will be decoupled of input and output properties and there will be all data getting and interaction will be with the store and there will be only single way of data transmission in the application.

### Where Not to use ngRx

- **When you are begginer :-**

    When the user will be beginner then its hard for him to understand the ngRx concepts soo its recommended to master the angular, and rxjs first.


- **When the application is small :-**

    Its not worth to use the ngRx in the application bcoz it adds the lot of code in the applicatio and its code can be more than the application code soo it would not be a better thing for it.

- **When your are using other state management things :-**

    When you are already using something for the state management of the application then you should continue with it.

### Simple Counter Application with ngRx

We should not use input, output, and service for the application.

**Steps to implement ngRx in application :-**

- Create Store object in one file.

    ```
    const conterState = {
    counter:0
    }
    ```
- Create Actions in one file.

    ```
    import { createAction } from "@ngrx/store";


    export const increment = createAction('increment')
    export const decrement = createAction('increment')
    export const reset = createAction('increment')

    ```

- Create Reducer for updating the state.

    ```

    import { createReducer, on } from "@ngrx/store"
    import { decrement, increment, reset } from "./counter.actions"
    import { counterStore } from "./counter.store"


    const reducer = createReducer(counterState,

    on(increment,(state:any)=>{
        return {
            ...state,
            counter: state['counter']+1
        }
    }),

    on(decrement,(state:any)=>{
        return {
            ...state,
            counter : state['counter'] - 1
        }
    }),
    on(reset,(state:any)=>{
        return{
            ...state,
            counter : 0,
        }
    })

    )

    export function counterReducer(state,action){
        return reducer(state,action)
    }
    ```

- Import the store in app moudule with the help of StoreModule like `StoreModule.forRoot({var:reducer})`.

    ```
    StoreModule.forRoot({counter:counterReducer})
    ```

- Get the state in the component by injecting store in constructor like ` constructor(public store:Store<any>) { }` and we need to select the store and we need to subscribe it as like mentioned below.
    ```
    constructor(public store:Store<any>) { }

    ngOnInit(): void {
        this.store.select('counter').subscribe((res:any)=>{
        console.log("State Response =>",res)
        this.counter = res.counter;
        })
    }
    ```
    Here we have suscribed the counter selector from the store and got the object as response and assigned the objects counter property to counter variable and its used in html.

    **Best Practice for get :-**   

    Rather than doing this much long steps we can create the observables variable by ending `$` like  `counter$` of type Observable `counter$:Observable<any>`.

    And we can directly sue the observable returned objects property directly in html with async pipe and after getting object its property like `<h2> Counter : {{(counter$ | async).counter}}</h2>`.
    

    ```
    // HTML File
    <h2> Counter : {{(counter$ | async).counter}}</h2>


    // Ts File
    counter$:Observable<any>;
    constructor(public store:Store<any>) { }

    ngOnInit(): void {
        this.counter$ = this.store.select('counter')
    }

    ```

- We need to dispatch the actions from the counter-actions component by injecting store in the constructor and dispatching the actions on the button click events like `this.store.dispatch(increment())` as like mentioned below.

```
constructor(public store:Store<any>) { }

 increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
```

### Passing Arguements to the actions and getting in the reducer

We can pass the data as the arguement to the actions with the help of props `props<any>`and we can get the data with the help of action like `on(increment,(state,action)=>{})` as like mentioned below.

**Steps :-**
- First create action and and pass the data with the help of props as like mentioned below.

```
// Props act as an arguement.
export const customCounter = createAction('customCounter',props<any>()) 

```

- Pass the data with the help of object and which will be appended in the actions object in the reducer.
```
// data should be always in object
this.store.dispatch(customIncrement({data:this.customVal})); 
```

- We can get the data in the reducer with the help of second parameter in the callback as like mentioned below.
```
// the second arguement of callback is object which returns actions uniquevalue and our data with the respective key.
    on(customIncrement,(res:any,data:any)=>{
        console.log("Data got in reducer =>",data)
        // {data: 5, type: 'customIncrement'}
        return {
            ...res,
            counter: res.counter + data.data    
        }
    })
```

### Selectors in ngRx

In the observables wherever we will suscribe to that whenever any change get detected then all the suscribers will execute it can lag the performance issue.

To avoid execution of all the suscribers and only where the change happen it is possible with the help of selectors.

**Selector make suscribers calls only to the specific selection of part like only counter, only name and other will not get executed as like default.**

**Steps to make selectors :-**

- First Make a file in which you can create selectors.

- First create the selector of store with the help of createFeatureSelector like `export const store = createFeatureSelector('counter')`.

- Then You can create the specific selectors for the properties of the store object like mentioned below.
    ```
    import { createFeatureSelector, createSelector } from "@ngrx/store";

    export const store = createFeatureSelector('counter');

    export const name = createSelector(store,(storeObj)=>{
        return storeObj['name']
    });
    ```

- Then We need to use the selectors in the different components as per the requirement like mentioned below.

    ```
    import { name } from '../State/counter-selectors';

    ngOnInit(){
        this.store.select(name).subscribe((res)=>{
        console.log("Counter Name Res =>",res)
        this.name = res
        })
    }
    ```
- After we have suscribed with selectors then the suscriber only get executed when the change detected in that property of the store object only.

### Refactoring with selectors

Firstly we used to create an observable in which we used to select the storeObj like `this.store$ = this.store.select('counter')`and then apply the async pipe on that and extracted property with `.name` like `(store$ | async).name`.

Now we can directly bind the property with selectors like the storeObject's name to the name$ observable directly like `this.name$ = this.store.select(name)` and we can directly use that property in the html with async pipe like `<h2>Counter Name : {{name$ | async}}</h2>`.

### Adding data in array of object with ngRx

As we know we cant manipulate the state soo we cant add the object in the array with `property.push(obj)` but we can do that by spreading previous and adding our object as well in that array as like mentioned below.

**Most Imp :- We cant delete type property from the data object soo we need to delete it by using const { type,...restObj} = data and the data without that property will be assigned to restObj.**

```
    on(addPost,(stateObj:any,data:any)=>{

        // Removing type with destrucuturing
        const { type,...restObj} = data
        console.log("Data Recieved in StateObj =>",restObj)
        return {
            ...stateObj,

            // That's how we are adding object to posts.
            posts:[...stateObj.posts,restObj]
        }
    })
```

### Passing Arguement to Selctor (Getting Single Entry From selector)

We can pass the data to the selector with props which is second param of `this.store.select(selector,data)` as like mentioned below.

```
// We are sending id-1 to selector
this.store.select(getSinglePost,id-1).subscribe(res=>console.log("Single Post Got =>",res))
```

**How to get data in selector :-**

We can get the passed data as an arguement in selectctor in the component can be get with the help of second param of callback in selector as like mentioned below.
```
// We got the data in action param(second param of callback passed to createSelector)

export const getSinglePost = createSelector(store,(stateObj,action)=>{
    // console.log("Data Got in getSinglePost selector =>",action)
    return stateObj['posts'][action]
})
```
### How to update some Data 

While updating the data or array of objects, as we cannot update the existing state soo we need to prepare the array of object with the updated object and we need to assign that aob to the property as like mentioned below.

```
// Update Function in component
  updatePost(data:any){
    let posts = this.posts
    let newData = {
      id:data.id,
      name:`Updated ${data.name}`,
      age :data.age
    }
    this.store.dispatch(updatePost({updated:newData}))
  }
  

  // Reducer
       on(updatePost,(stateObj:any,data:any)=>{
        const updatedPosts = stateObj.posts.map((item)=>{
            return item.id==data.updated.id ?  item = data.updated : item
        })
        console.log("Data got in update Post =>",updatedPosts)
        return {
            ...stateObj,
            posts:[...updatedPosts]
        }
    })
})
```

### How to delete data in state

For the delete opration in the state as we know we cant directly manipulate the state soo we need to filter the data without the delete object like 
```
   const updatedPosts = stateObj.posts.map((item)=>{
            return item.id==data.updated.id ?  item = data.updated : item
        })
``` 
and we can spread the data to its against property.

```

// Delete action
export const deletePost = createAction('deletePost',props<any>())

// Delete Method in component
 deletePost(id:any){
    console.log("Delete Id =>",id)

    this.store.dispatch(deletePost({id:id}))
  }

// Delete Reducer
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
```

### Lazy Loading of states

By default we have initialized `StoreModule.forRoot('counter',CounterReducer)` which is loading our state in our application.

As we lazy load the modules with the help of loadChildren we can lazy load the states as well by mentioning storemodule in their feature modules with `StoreModule.forFeature('name',reducer)` in the imports.

```
imports:[
  StoreModule.forFeature('name',reducer)  
]
```

### Effects in ngRx

`Installation :-` **npm install @ngrx/effects**

`Register :-` **EffectsModule.forRoot()**



Effects are the observables for calling the service for the http calls and which takes an action and after a api call it will dispatches an action for the storing or manipulating that data into state.

That action could be an sucess or failure action.

Effects is nothing but an service with the ngRx Effects calls.

**Steps to Implement Effects :-**

- create a service with `ng g s name`

- Import actions in the service and as its an observable we need to declare it with `actions$` as like mentioned below.
```
  constructor(private actions$:Actions,private api:ApiService) { }
``` 
- create variable and write effector to it like and create effector which takes a callback like 
```
login$ = createEffect(()=>{
    
})
```

- Then we need to start write return statement with `actions.pipe()` for the filtering the actions with the help of `ofType(action)` which will be imported from @ngrx/effects.
```
constructor(private actions$:Actions,private api:ApiService) { }

login$ = createEffect(()=>{
  return this.actions.pipe(
    ofType(loginStart), // for filtering the action
  )
})
```

- Then we need to write the `exhaustMap()` in which you will get action (data passed to it) in the callback like `exhaustMap((action:any)=>{}` and we can call the service with the help of data which we got in callback like `this.api.login(action.email,action.pass)` as like mentioned below.

```
constructor(private actions$:Actions,private api:ApiService) {}

login$ = createEffect(()=>{
  return this.actions.pipe(
    ofType(loginStart), // for filtering the action
    exhaustmap((data:any)=>{
        return this.api.login(data.email,data.password)
    })
  )
})
```
- At last we need to apply the pipe oprator to perform action after getting data with the help of map oprator like `return this.api.login(data.email,data.password).pipe(map((data:any)=>{}))` in which we can call furher action or we can return the data as like mentioned below.
```
 constructor(private actions$:Actions,private api:ApiService) { }

  login$ = createEffect(()=>{
  return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action:any)=>{
  
        console.log(action)
  
        let typeCodeTodos = ''

        // pipe and map oprator for getting data
        return this.api.get(typeCodeTodos).pipe(
          map((data:any)=>{
            return loginSucess()
          })
        )
      })
  )
  })
```

- For using the effector we need to import it in module for app module `EffectorModule.forRoot(serviceName)` and for feature Module `EffectorModule.forFeature(serviceName)`.

- Effector will be get executed whenEver the action regarding to it get called as like mentioned below.
```
login(data:any){
    this.store.dispatch(login({email:data.email,pass:data.pass))
}
```

Hence thats how we have created effect sucessfully which will be called automatically after calling the action which we have mentioned in `ofType(action)`.



### How to save the api response data to store and get Data

At the last statement of the effector above we are returning another action `return loginSucess()` soo in that action we can take data as an arguement with the help of `props<any>` in action and we can send that data to the store with the help of by making reducer of it as like mentioned below.

```
// Actions
export const loginStart = createAction('loginStart',props<any>())

export const loginSucess = createAction('loginSucess',props<any>())

// Effect For login
login$ = createEffect(()=>{
  return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action:any)=>{
  
        console.log(action)
  
        let typeCodeTodos = ''
        return this.api.get(typeCodeTodos).pipe(
          map((data:any)=>{
            return loginSucess({res:data})
          })
        )
      })
  )
  })

// Calling effector action
this.store.dispatch(login({email:data.email,pass:data.pass))

// Reducer for sending data to state
on(loginSucess,((state,{res})=>{
return {
    ...state,
    apiRes:res
}
}))
```
**Getting Data :-**

We can simply make an selector for the apiRes Data as like mentioned below.
```
export const apiRes = createSelector(store,(state)=>{
    return state.apiRes
})
```

And just simply we need to suscribe to the selector like 
```
this.store.select(apiRes).subscribe((data:any)=>{
    console.log("Api Response Data =>",data)
})
```

### HTTP Error Handelling of Effector

If error occurs in the api call due to some reason our loader and all will be stil spinning and we need to perform some opration on the error.

Soo it can be done with `catchError(cb)` method as an second arguement of `this.api.login(data).pipe(map(cb),catchError(cb))` and that `catchError()` will be called.

when the catch error will be called then we need to create a action and selector for the setting error massage in the state and we need to get the error with that selector wherever we needed.

```
// Effect For login
login$ = createEffect(()=>{
  return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action:any)=>{
  
        console.log(action)
  
        let typeCodeTodos = ''
        return this.api.get(typeCodeTodos).pipe(
          map((data:any)=>{
            return loginSucess({res:data})
          }),
          catchError((res:any)=>{
            return setErrorMessage({err:res})
          })
        )
      })
  )
  })
```   

### Ngrx Loader

If we want to use the loader with the help of ngrx then we need to create the follwoing things.

- loader state
- loader actions
- loader reducer
- loader selector

As usual we need to create the above things and we need to create a service in which 2 methods will pass the parameters and dispach the actions and we can call that functions by injecting service as like mentioned below.
```
// loader.service.ts
import { Store } from '@ngrx/store';

constructor(private store:Store) { }

  showLoader(){
    return this.store.dispatch(showLoader({status:true}))
  }

  stopLoader(){
    return this.store.dispatch(showLoader({status:false}))
  }
```

### Navigation from the effects after any api call

We have a lot of scenario's in which we need to call some api and after that we need to navigate to some other page soo in that case we can do the navigation in the effects itself.

For that we need to create new effect in which we simply need to use the `createEffect(ofType(action),map(cb))` as like mentioned below.


```
login_redirect$ = createEffect(()=>{
  return this.action$.pipe(ofType(action),map,tap((action)=>{
    return this.router.navigate(['/'])
  })
})
```

The above effect will react on the action we have provided in `ofType()` and when that action will be called it will redirect to the mentioned page.

### Auto Login Feature (Saving User Details in LocalStorage)

For the auto login feature first we need to save the user details in local storage.

**Steps to save the details in the localstorage :-**

- We can make a service in which we can put the all methods for the localStorage to set, get, and clear.

- And then we can create a effect on the login sucess action which will call the service for the storing user details in local storage.

**Auto Login Steps :-**

- For auto login we need to create another effect for getting user details from localstorage and create new user which by which we will be loagged in.

- We need to use that effect in `app.component.ts` in ngOnInit() soo whenever app reloads the user details will be fetched from local storage and application will login again.

### Auto Logout Feature (For Logout when the token expires)

When the user logins and get the auth token from firebase we are storing the user details in local storage.

in that functionality we need set and timeOut in which when the expiration time gets arrived we can match it with expiration time and then when it will return true we can clear the local storage and navigate the user to login page soo user will need to login again.

### Crud with effects and api calls

Earlier we have seen the crud opration in the states soo it will be all same but we are going to use effects for the same with actions.

**CRUD with effects :-**

- **Process :-**  

  - First we need to create 2 actions for get like `start get` `get sucess`.

  - Then we need to create a reducer which will stores, updates or deletes the data in state as per the requirement.

  - Then we need to create the respective selector which will return the data on change detection.

  - Then we need to create effect for the api call on which we can pass the `ofType(start)` when on the sucess or failure of it we need to dispatch the another action which will updates the data in the state.

  ```
    // Actions For Api
    import { createAction, props } from "@ngrx/store";

    const getUsers = createAction('getUsers')

    const getUserOnSucess = createAction('getUserOnSucess',props<any>())


  // Reducer to set the data in state

  on(getusersOnSucess,(state,action)=>{
    return {
      ...state,
      posts:[...actions.posts]
    }
  })


  // Effect for the api call
  constructor(private actions$:Actions,private api:ApiService) { }

  getUsers$ = createEffect(()=>{
    return this.action$.pipe(ofType(getUsers),exhaustMap((action:any)=>{
      // We can get the dispatched data from action in action here.
      let typeCodeTodos = 'http://localhost:8080/posts'
      return this.api.getUsers(typecodeTodos).pipe(map(data:any)=>{
        console.log("Api Data",data)

        return this.store.dispatch(getUserOnSucess({posts:data.result.posts}))
      })
    }))
  })


  // Selector for getting posts if not available
  
  import { createFeatureSelector, createSelector }  from "@ngrx/store";

  const postsState = createFeatureSelector('posts')

  export const getPosts = createAction(postState,(state:any)=>{
    return state.posts
  })


  // Suscriber for getting data

  ngOnInit(){
    this.store.select(getPosts).subscribe((res:any)=>{
      console.log("Posts Got",res)
      this.posts = res
    })
  }
  ```

### Interceptors with effects in ngRx

We just need to create the http intercepter services and we can get the data in it by selectors and we an check with its data our required conditions and we can proceed further as like mentioned below.

```
 intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(getAuthToken).pipe(map(token:any)=>{
      if(!token){
        next.handle(request)
      }
      else{
        let modified_req = req.clone({
          headers:req.headers.append('auth-token',token)
        })

        next.handle(modified_req)
      }
    })
  }
```

### RouteGuards With ngRx

As we have used intercepter service for the auth token append here we need get the authToken with the selector and if the selector will be available we need to route to the further page else we need to route to the login page as like mentioned below.

```

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    let loggedIn = this.store.select(getAuthToken).pipe(map(token)=>return token)

    if(this.loggedIn){
      return true
    }
    else{
      this.router.navigate(['/login'])
    }
  }
```

### ngRx Router Store

`Installation :-` **npm install @ngrx/router-store**

`Register :-` **StoreRouterConnectingModule.forRoot()**

If we want to dispatch some actions while routing from one page to another, we can use the `RouterStore`.

We can see the actions in the redux debugger as well.

**Router State and RouterReducer :-**

As we had to develop the router state and reducer, but here we dont need to worry about.

We can directly mention the routerState in store like `router:RouterState` and in the app reducer `router:RouterReducer`.

```
import { routerReducer } from "@ngrx/router-store";

export const appReducer = {
    counter:counter_reducer,
    loader:loaderReducer,
    router:routerReducer
}
```

### serielizer in nRx/Router

We can't keep the entire router state in the application and we only need from it is url, params, query params and the fragments soo minimalising the router state into only required things is called as serielizer.

**Steps :-**

- create class names as `ngrx-serielizer` and implements `RouterStateSerializer` and implement the method `serielize(routerState:RouterStateSnapshot){}` .

- Copy paste the default serielizer which mentiond on `https://ngrx.io/guide/router-store/configuration`.


  ```
  import { Params, RouterStateSnapshot } from "@angular/router";
  import { BaseRouterStoreState, RouterStateSerializer } from "@ngrx/router-store";

  export interface RouterStateUrl{
      url:string;
      params:Params;
      queryParams:Params;

  }
  export class NgrxRouterSerializer implements RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot):RouterStateUrl  {
        
        let route = routerState.root;
 
        while (route.firstChild) {
          route = route.firstChild;
        }
     
        const {
          url,
          root: { queryParams },
        } = routerState;
        const { params } = route;
     
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
  }


- And for using serielizer for the router State we need to pass it to `StoreRouterConnectingModule.forRoot()` with the key `serielizer:className` as like mentoioned below.

  ```
  StoreRouterConnectingModule.forRoot({
        serializer:NgrxRouterSerializer
      })
  ```

**Use and applications of serielizer :-**

- For getting the router params, query params and url we dont need to inject the `router:Router` everywhere.

- We can optimize the code.

### Using router Store in application

We can create the router store and apply the serielizer soo will have only the usefull things in the router state.

**Using router State for update posts loading data :-**

- First we need to create the selector in which we dont need to pass the props because we are going to get the id from the router state itself in the selector as like mentioned below.

  ```
  const routerState = createFeatureSelector('router')

  const getUpdatePostData = createSelector(postsState,routerState,(postsState,roterState)=>{
    return posts ? posts.find((post)=> post.id == routerState.params['id']) : null
  })
  ```

Above selector will check the if posts present then return posts in the first parameter of callback and routerState in the second parameter and we are using `posts.find()` method to return the post and returning true where post's id matches with the `router.params['id']`.

- Then we need to remote the router injector and we need to write the suscriber with the property type of Subscription like `postsSubscription:Subscription` and we need to unsuscribe it as well on the ngOnDestroy method. 

```
this.postSubscription = this.store.select(getUpdatePostData).subscribe(postData=>{

  if(postData){

  this.postData = postData;
  
  this.updateForm.patchValue({
    title:postData.title,
    description:postData.description
  })

  }
})
```
### ngRx RouterStore with effects

To use execute the effect on the router navigation we can use the routerStore for executing the specified effect for the specified opration.

**Steps :-**

- First create effect and execute it on `ROUTER_NAVIGATION` as like mentioned below.

```
getSinglePost$ = createEffect(()=>{
  
})
```


### ngRx Entity

**Installation :-** `npm i @ngrx/entity`

Normally we need to create reducers for the every store individual and our boilter plate code will be the same for all. Soo we can reducer our boilerplate code with the ngRx entity.

And 

NgrxEntity provides different format for store in which we dont need to for loop for finding, updating, and deleting the data it will directly return the data and performance issues will be resolved with this for the millions and billions of data.


### State with Entity

We need to create state with entity and entity adapter to use the entities in your throughout the application.


- First we need to extend out state's interface to the `EntityState` as like mentioned below.

  ```
  export interface CounterStateWithEntity extends EntityState<model>{
  }
  ```

  **Interface of Entitiy :-**

  ```
  interface EntityState<V> {
    ids: string[] | number[];
    entities: { [id: string | id: number]: V };
  }
  ```

  If we need to put on the default data then we need to put it in this format with id's and entities object.


- Then we need to create the adapter for this state with `createEntityAdapter<type>()` as like mentioned below.

  ```
  export interface CounterStateWithEntity extends EntityState<modelName>{
  }

  export const postsAdapter = createEntityAdapter<model>();
  ```

- Then we need to create the inbuilt initial state provided by `ngrx/entiry` for the posts with `adapter.getInitialState()` as like mentioned below.

  ```
  export const initialPostState = postsAdapter.getInitialState({
     posts:[
        {id:1,name:'Shivprasad',age:22},
        {id:2,name:'Saikiran',age:24},
    ]
  });
  ```


### Reducers with entities

We can build the reducers with the entities inbuilt methods easily without having any worry of immutablity of state and its updation.

**CRUD Reducers with entities :-**

Reducers will be remains the same rather than its return statement will be changed with `postsAdapter.method(data,state)`.

- **Create :-**

  For create we will simply use the `addOne()` method of entity.

  ```
    on(addPost,(stateObj:any,data:any)=>{
      return postsAdapter.addOne(data,state)
    })
  ```

- **Delete :-**

  For delete we will simply use the `removeOne()` method of entity.

  ```
      on(deletePost,(state:any,id:any)=>{
        return postadapter.removeOne(id,state)
    })
  ```

- **Update :-**

  There is different way to update the data with entity.


  While creating the action we need to provide the props with `Update` type as like mentioned below.

  ```
  export const updatePostSucess = createAction('updatePOostSucess',props<{post:Update<Post>}>);
  ```

  Update will not take the post directly soo it will take the entity of the state with the interface mentiond below.

  ```
  // Input dataType for update

  let updateWithEntity = {
    id:action.post.id,
    changes:{...action.post}
  }
  ```

  And we need to send the data to the `updateOne()` Method as like mentinod below.

  ```
    on(updatePost,(stateObj:any,data:any)=>{
      return postsAdapter.updateOne(data,state)
  }),
  ```

  **Update Something in another call :-**

  we can update with the another way as well like instead of passing the second parameter the state we can pass the object with spread oprator destrucuturing as like previous and mentioned below.


  ```
    
    on(addPost,(stateObj:any,data:any)=>{
      return postsAdapter.addOne(data,{
        ...state,
        counter:state.counter+1
        })
    })
  
  ```

### Selector with entity

Previously we used to create the selectors and we used to return the data with `state.property`.

BUT

While using entities we are having the state in the different dataTypes soo entityAdapter also provides the selector methods as well depending upon the requirements, and we need to create the selectors with entities selector methods.


**Selectors with entities :-**

- First create the selector instance with `adapterName.getSelector()` as like mentioned below.

  ```
  export const entitiesSelector = postAdapters.getSelector();
  ```

- Then we need to use methods with its selectors instance with `dot notation` as like object in selectors callback `createSelector(stateSelector, entitySelectorInstance.method)` as like mentioned below.

  ```
  export const store = createFeatureSelector('counter')

  export const entitiesSelector = postAdapters.getSelector();

  export const Posts = createSelector(store,entitySelector.selectAll)
  })
  ```

### ngRx Entities Configuration

We can Config the ngRx Entities like default data, sort options, primary key and all as like mentioned below.

**Default Data :-**

We can add the default data in the state in the object as like mentioned below.

  ```
    export const initialPostState = postsAdapter.getInitialState({
      posts:[
          {id:1,name:'Shivprasad',age:22},
          {id:2,name:'Saikiran',age:24},
      ]
    });
  ```


**Primary Key :-**

ngRx will consider the primary key as 'id' but if we have a primary key with another names like postId, userId and all then we can mention it in the `adapters configuration` with `selectId` with callback like `select: (post:any) => post.id`
as like mentioned below.

```
  export const postsAdapter = createEntityAdapter<model>({
    selectId: (post:any) => post.id
  });

```

**Sorting Your List :-**

We can sort the list as well by default when storing in the entity state with the help of `sortComparer` property of config object which takes the callback fucntion as like mentiond below.

```
  export const postsAdapter = createEntityAdapter<model>({
    selectId: (post:any) => post.id,
    sortComparer: sortByName
  });

  export function sortByName(a:any,b:any):number{
    return a.name.localCompare(b.name);
  }
```

**Revert Sort :-**

We just need to manipulate the sortByName fucntion by returning vice versa values like if it will be `result>0` then `return -1` and if it will `result<0` then `return 1` as like mentioned below.

```
  export const postsAdapter = createEntityAdapter<model>({
    selectId: (post:any) => post.id,
    sortComparer: sortByName
  });

  export function sortByName(a:any,b:any):number{
    let compare =  a.name.localCompare(b.name);

    if(compare>0){
      return -1
    }
    if(compare<0){
      return 1
    }

    return compare;
  }
```


### Remove Unwanted Api calls with effectors

We can avoid calling unwanted api's if the data available is in the store and call only when data will not be present.

We can achieve this by `withLatestFrom()` rxJs oprator which returns the latest data available from store in which we need to pass the `selector with this.store.select` and it will resolves the unwanted api calls.

BUT

effect should return an observable else it will throw an error error soo we need create one `dummy action` which we need to return with `ofType()` rxjs oprator which will converty it to an observable.

```
  getData$ = createEffect(()=>{
  return this.actions$.pipe(
      ofType(action1),
      withLatestFrom(this.store.select(getData())),
      exhaustMap(([action,posts])=>{
        if(!posts.length){
          return this.api.get(typeCodeTodos).pipe(
          map((data:any)=>{
            return action2({res:data})
          })
        ) else{
          return ofType(dummyAction)
        }
        }
        
      })
  )
  })
```






