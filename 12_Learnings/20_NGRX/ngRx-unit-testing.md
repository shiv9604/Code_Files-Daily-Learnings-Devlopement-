 ngRx Unit Testing in angular

Previously we have learned how to unit test case the component, services, pipes and all the things with angular but for testing the ngRx flow we need to test the things as mentioned below.

### Things to Test in ngRx Flow

- **selectors :-**  To check weather the returning value in the correct manner.

- **Reducer :-** To check the reducer is doing the correct oprations in the state or not.

- **Effects :-** To make sure that the lengthy flow of Effects to the api call is working properly and as it should be work as expected.

### Reducer Unit Testing
Reducer is nothing but an pure function which takes 2 parameters which is action and state and returns the updated state based on the actions type.

**Stpes For unit testing reducers :-**

- `import * as br from './archive-building.reducers'` import everything from the reducer as like above to acess the functions.


- Create Initial State or take from the reducer as like mentioned below.

    ```
    let initialState = {}
    let {initialState} = counterReducer
    ```

- Create action by importing action with a constant as like mentioned below.

    ```
    let action = favoraiteShow(props if available)
    ```

- Create The Expected output state as like mentioned below.
    ```
    let favoraited = [
        {
            id:1,
            name:"Test 1",
            description:'Test Description 1',
            isFavorite:true
        }
    ]
    ```

- get result and store in constant and assert it with the expected state.

    ```
    let result = showReducer(action,initialState)

    expect(result).toEqual(favoraited)
    ```


**TestCase For checking the favoraiteShow Action in the reducer :-**

```
it('should not update the state when showId does not exist' , () => {
    const initialState: Array<Show> = [
        {
            id: 1,
            name: 'Test',
            description: 'Description',
            imgurl: '',
            isFavorite: false
        }
    ];
    const action = favoriteShowSuccess({ showId: 2 });
    const state = fromReducer.reducer(initialState, action);
    expect(state[0].isFavorite).toEqual(false);
});
```

### Selectors Unit Testing

Selector is used to select perticular data from the store and we can project the state with the `selector.projector(initialState)` method which returns the result on the dependant upon the selectors type and functionality.

**TestCase For Selector to select the favoraite Shows From the store :-**

```
it('should select the favoraite Shows from the store', () => {
    let initialState = [{
          {
            id: 1,
            name: 'Test',
            description: 'Description',
            imgurl: '',
            isFavorite: false
        },
          {
            id:  2,
            name: 'Test 2',
            description: 'Description 2',
            imgurl: '',
            isFavorite: true
        }
    }]

    const result = favoraiteShowSelector.projector(initialState)

    expect(result.length).toEqual(1)
    expect(result[0]).toEqual(initialState[1])
})
```
### Test Schedular

Test Schedular is the `ngRx/test/utils` utility to test the observables as per the marble diagram in which we can check observables emition and the source.

**Important Terms in testSchedular :-**

- `hot :-` Creates Hot observables which produce the data outside of the observable.

- `cold :-` Creates Cold observables which produce the data inside of the observable.

- `expectObservable().toEqual() :-` This is expect method which can be used inside the testSchedular for assertion of observables outputs and the marble diagram.

- `- :-` this tick indicated the 10 miliseconds means `---` will mean 30ms.

- `-| :-` This defines the end of marble timings.

**Stpes To Use the TestSchedular :-**

- First Create the testSchedular in the beforEach method as like mentioned below.

```
let testSchedular;
beforeEach(()=>{
    // We can change the assertion behavior of the testSchedular.
    testSchedular = new TestSchedular((actual,expected)=>{
        expect(actual).toEqual(expected);
    })
})
```

- Sample TestCase For the TestSchedular as like mentioned below.

```
it('should assert 2 observables value emition on the marble timing',()=>{
    testSchedular.run(({hot,cold,expectObservable})=>{

        const sourceValues = {a:1,b:2,c:3}
        const source$= cold('a-b--c|',sourceValues)

        const expectedValues = {a:10,b:20,c:30}
        const expected$= cold('a-b--c|',expectedValues)

        const result = source$.pipe(map(i=>i*10));

        expectObservable(result).toEqual(expected$)
    })
})
```
### Testing Effects in ngRx

Testing effect is the most important and intresting part of ngRx unit testing to check the throughout flow for how its flow works and how we can test that.

**Steps For Effects :-**

- Configuration for effect boiler template code.

    - `initialState :-`

        We need to create initialState or we can get it from the reducer as well as like `let initialState = {}` or `let {initialState} = counterReducer`

    - `mockShowService :-`

        Then we need to mock the service with `jasmine.createSpyObj(name,['method'])` which will be used in the effect from `import { MockStore, provideMockStore } from '@ngrx/store/testing';`.

    - `effcts :-`

        We need to create effects Class instance with the type of it as like `let postEffects:PostEffects;`.

    - `actions :-`

        Then we are going to need to actions stream as well from which specific action will be called and effect will run automatically after that actions calll as like `let actions:Observable<any>`.

    - `store :-`

        Then we need the store type of MockStore which provides some more functinalities than actual store as lik `let store:MockStore<AppState>`

    - `testSchedular :-`

        TestSchedular is for rxJs oprator testing as we are going to use.

Ex : 
```
import { MockStore} from '@ngrx/store/testing';


let initialState;
let mockService;
let effects:postEffects;
let actions:Observable<any>;
let store:MockStore<AppState>;
let testSchedular;
```    

- TestBed Configuration and testSchedular configuration in beforeEach method as like mentioned below for making sure we have resolved all dependencies and everything working properly and to get the instances of everything we are going to use.

    ```
    import { Observable } from 'rxjs';
    import { provideMockActions } from '@ngrx/effects/testing';
    import { MockStore, provideMockStore } from '@ngrx/store/testing';
    import { inject, TestBed } from '@angular/core/testing';
    import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
    import { TestScheduler } from 'rxjs/testing';
    


    let initialState;
    let mockService;
    let effects:postEffects;
    let actions:Observable<any>;
    let store:MockStore<AppState>;
    let testSchedular;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[
                postEffects,
                // ngRx providers mockStore For mocking the store rather than full store.
                provideMockStore({initialState}),

                // ngRx providers mockActions for manipulate the "actions$" stream.
                provideMockActions(()=>actions),
                {provide:PostsService, useValue:mockPostService}
            ]
        })

        effects = TestBed.inject(ShowsEffects);
        store = TestBed.inject(MockStore)

        // we are setting the store in a state what we want.
        store.setState(initialState);
    })


    it('should be initialized',()=>{
        expect(effects).toBeTruthy();
    })

    ```

- Write The testCase by setting up the action `action = getPosts()` and outcome like `outcome = getPostsOnSucess({posts})` and we need to declare the posts as well as like mentioned below.

```
let posts = [
    {
        id: 1,
        title:'title 1',
        desc:'description 1'
    },
    {
        id: 2,
        title:'title 2',
        desc:'description 2'
    },
    {
        id: 3,
        title:'title 3',
        desc:'description 3'
    }
]

action = getPosts()
outcome = getPostsOnSucess({posts})
```

- Then Finally We need to write our assertion in the **TestSchedular** with `hot`,`cold` and `expectObservable` with marble diagrams as like mentioned below.

```
    testSchedular.run(({hot,cold,expectObservable})=>{

        // Create hot observable for action with marble diagram
        actions = hot('-a',{a:action})

        // Create Cold observable for the response which should be assigned to the service's return value
        const response = cold('-b',{b:posts})

        mockPostService.getPosts.and.returnValue(response)

        expectObservable(effects.getPosts$).toEqual('--b',{b:outcome})
    })
```

### Unit Testing for dispatched actions

We can test the dispatched actions as well on which we can check that on calling of specific function that method has being called in a service or else.

**TestCase For checking correct action is being called with method :-**

```
it('getPosts should dispatch getAllPosts action',()=>{
    component.getPosts();
    
    // expect(store.dispatch).toHaveBeenCalledWith(action)
    expect(store.dispatch).toHaveBeenCalledWith(getAllPosts())
})
```
