### Angular Unit Testing

Angular unit testing is nothing but the automation testing in which we write testcases for improving the quality of the application and the performace.

### Types of unit testing

- **Isolated :-** Only Single functionality testing.

- **Integration :-** Things integrated together like template, style, and logic as component that called as integration tests.

### Testing Cli Copmmands

- **`ng test` :-** This will run the testcases in the angular.1

### Types of automated testing

- **Unit testing :-**

  Unit testing is done against a single unit of code. Here unit of code means a single class like js function or class.

  Single component testing can called as unit testing.

- **E2E testing :-**

  Automated Browser testing in which we can manipulate the browser tasks and click, hover and form filling functionality on automated web browsers.

- **Integration or functional testing :-**

  Integration and functional testing is defined as more than a unit but less than a complete application.

  Normally these will be done to check that whether one part of the application is working with another part.

  Component testing along with its dependency can called as unit testing.

  But in angular we have seprate html and ts file and by angular methodologies as we are testing 2 defferent components then we can call this as integration testing.

### Types of Tests in Angular

- **Isolation testing :-**

  In isolation we always should mock our dependencies, otherwise, it isn't isolation anymore.
  In isolated unit testing, we don't test the template parts for a component, only the logic behind it. In this test, we test all the methods that have the expected behavior.

  - **Units in Isolation Testing :-**

    - Pipe
    - Service
    - Class
    - Component
    - Directive

- **Integration testing :-**

  In the integration testing in angular we test whole module as its meaning is to test more than on unit.

  - **Shallow Test :-**

    In shallow unit tests we test only single component along with its template.

  - **Deep Test :-**

    In Deep integration tests we test many components which having child components.
    Sometimes we get a scenario to test both parent and child component. This is called as deep integration test

### Types of mocks

- **Types of mocks :-**

  - Dummies
  - stubs
  - spies

### First Test Case

```
    describe('First Test ' , () ⇒ {

    let testVariable: any;

    beforeEach(() ⇒ {
    testVariable = {};
    });

    it(' should return true if a is true ' , () =>{

    // arrange
    testVariable.a = false;

    // act
    testVariable.a = true;

    // assert
    expect(testVariable.a) .toBe(true);
    });

```

In the above code `describe(cb)` method refers to the describing the test case in which we are going to nest the cases with `it(title,cb)` in which we are going to create the situation and going to test them with the help of `expect(input).toBe(expectedOutput)` which gonna tells us is test case passed or not.

### Pending, Failed States

We can put the test case in the pending state by 2 ways as mentioned below.

- `pending()` - puts test case in the pending state.

- `xit() rather than it()` - This also puts test case in the pending state.

- `failed()` - This will fail the test case.

### Simple testcases for the calculator programme

We are going to create calculator service in which we are going to write the test cases for the methods of the calculator service.

```
describe('CalculatorService',()=>{

    it('should add 2 numbers',()=>{

        // how to acess the service's method
        let calculatorService = new calculatorService()

        // let result
        let result = calculatorService.add(2,2)
        expect(result).toBe(4);
    }),

    it('should substract 2 numbers',()=>{

        // how to acess the service's method
        let calculatorService = new calculatorService()

        // let result
        let result = calculatorService.sub(2,2)
        expect(result).toBe(0);
    })
})
```

### Dependencies Injection while testing

If we have calculator service having methods like `add()` and `subtract()` but its also have another service as a dependency like loggerserice which just preserves the log masssages.

In the above code we had took the service instance but it will throw an exception because the service having dependency which needs to be injected soo we can inject the loggerservice into the calculator service instance in the testcases as like mentioned below.

```
describe('CalculatorService',()=>{

    it('should add 2 numbers',()=>{

        // acessing loggerservice for injecting in calculator service
        let loggerService = new loggerService();

        // Here we had injected the dependency in the service instance
        let calculatorService = new calculatorService(loggerService)

        // let result
        let result = calculatorService.add(2,2)
        expect(result).toBe(4);
    }),

    it('should substract 2 numbers',()=>{

        // how to acess the service's method
        let calculatorService = new calculatorService()

        // let result
        let result = calculatorService.sub(2,2)
        expect(result).toBe(0);
    })
})
```

### Jasmine Spy

Jasmine spice is methodology to create dummy components, services, classes and etc for the testing purpose only which will not use the real methods of some service, or components or modules.

- **spyOn() :-**

  When we use `spyOn(serviceInstance, 'method')` it not gonna use the actual method of the service.

  And We can check the how manu time it should called with `expect(method).toHaveBeenCalledTimes(1)` which will only pass the test case if the method has only called on times else it will reject the test case.

  ```
  describe('CalculatorService',()=>{

      it('should add 2 numbers',()=>{

          let loggerService = new loggerService();

          // Spying on method (It will not call the orignal method)
          spyOn(loggerService,'log')

          let calculatorService = new calculatorService(loggerService)


          let result = calculatorService.add(2,2)
          expect(result).toBe(4);
          expect(loggerService.log).toHaveBeenCalledTimes(1);
      }),

      it('should substract 2 numbers',()=>{

          let loggerService = new loggerService();

          let calculatorService = new calculatorService()

          // Spying on method (It will not call the orignal method)
          spyOn(loggerService,'log')

          let result = calculatorService.sub(2,2)
          expect(result).toBe(0);
          expect(loggerService.log).toHaveBeenCalledTimes(1);
      })
  })
  ```

  In the above example there is a flaw which is we was able to spy on the method but loggerservice still calling and due to that logger service constructor method is being called which is not a good practice.

  To avoid this we can use `jasmine.spyObject('serviceName',['method'])` which will not even call the constructor method of the service and it will create an mock service and we can run the test cases on the mock service.

- **jasmine.spyObject() :-**

  This will mock the file object and we can spy on the methods without using the orignal service object while its initialization.

  ```
  describe('CalculatorService',()=>{

      it('should add 2 numbers',()=>{

          // acessing loggerservice for injecting in calculator service
          let mockLoggerService = jasmine.createSpyObj('loggerService',['log'])

          let calculatorService = new calculatorService(loggerService)

          let result = calculatorService.add(2,2)
          expect(result).toBe(4);
          expect(loggerService.log).toHaveBeenCalledTimes(1);
      }),

      it('should substract 2 numbers',()=>{


          // acessing loggerservice for injecting in calculator service
          let mockLoggerService = jasmine.createSpyObj('loggerService',['log'])

          let calculatorService = new calculatorService()


          let result = calculatorService.sub(2,2)
          expect(result).toBe(0);
          expect(loggerService.log).toHaveBeenCalledTimes(1);
      })
  })
  ```

### BeforeEach method

`beforeEach(cb);` function gets called before every testcase in the testing files by which we can do the repetead tasks in the `beforeEach()` method.

**Our Every test case should be isolated and should not be dependant on the other testcases and for that we need to create the instance objects for the every test case in the `beforeEach()` method soo our each test case will be isolated and will not be dependant on any other as like mentioned below :-**

```
describe('CalculatorService',()=>{
    let mockLoggerService;
    let calculatorService;
    beforeEach(()=>{
        // initializing the logger service and calculator before every test case

        mockLoggerService = jasmine.createSpyObj('loggerService',['log'])

        calculatorService = new calculatorService(loggerService)
    });

    it('should add 2 numbers',()=>{
        let result = calculatorService.add(2,2)
        expect(result).toBe(4);
        expect(loggerService.log).toHaveBeenCalledTimes(1);
    }),

    it('should substract 2 numbers',()=>{

        let result = calculatorService.sub(2,2)
        expect(result).toBe(0);
        expect(loggerService.log).toHaveBeenCalledTimes(1);
    })
})
```

And that's how we can create the isolated and clean test cases.

### Pipe Testing

For Example if we had created a NumStrenthPipe which returns `num [weak]` for the numbers less than 5, and `num [strong` for greater than 5 and `num [strongest]` for greater than 10 soo we can check that test cases as like mentioned below.

**toEqual() :-** `expect(inputvalue).toEqual(expected value)` This will check the input value is equal to the expected value then it will pass the test else it will fail.

To Equal function is used for checking the equality of value in expect statements in the testcases as like mentiond below.

Ex Of Testcases of Pipes :-

```
describe('NumStrenthPipe', () => {
  let pipe: NumStrenthPipe;

  beforeEach(()=>{
    pipe = new NumStrenthPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('it should return weak for value 3',()=>{
    expect(pipe.transform(3)).toEqual('3 [weak]')
  });

  it('it should return strong for the value 7',()=>{
    expect(pipe.transform(7)).toEqual('7 [strong]')
  });

  it('it should return strongest for the value 15',()=>{
    expect(pipe.transform(15)).toEqual('15 [strongest]')
  })
});
```

In the above code we are creating pipe instance in the beforeEach method and checking the test cases and passing lon its all conditions.

### Service Testing

For the example we have created before we have a logger service which have 2 mehods `log()` which push the messgaes to the messages array and we have `clear()` method which clears the messages array.

**Steps for writting testcases for the service :-**.

- First to check if its getting initialize or not which is default test of the spec file.

- Check the log function with arrange, act and assert actions.

- Check the clear function with arrange, act and assert actions.

```
describe('LoggerService' , () ⇒ {

    let service: LoggerService;

    beforeEach(() ⇒ {
    service = new LoggerService();
    });

    it( ' should not have any messages at starting' , () ⇒ {
    // act
    let count = service.messages.length;
    // assert
    expect(count) .toBe(0);
    });


    it('should add the message when log is called' , () ⇒ {
    // actdebugElement.query(By.directive())
    service.log('message');
    // assert
    expect(service.messages.length).toBe(1);
    });

    it('should clear all the messages when clear is called' , () ⇒ {
    // arrange
    service.log('message');
    // act
    service.clear();
    // assert
    expect(service. messages.length).toBe(0);
    });
```

### Isolated Component Testing

In isolated component testing we will be only test the methods of the component by preparint the dummy data and creating spyService Object and component instance by which we will call the methods.

**Steps for component testing :-**

- Arrange the component instance, service spy instance and dummy data in the beforeEach method as like mentioned below.

```
describe('PostComponent',()=>{
    let component:PostComponent;
    let posts:Post[];
    let mockPostService:MockPostService;

    beforeEach(()=>{
        // arrange
        component = new PostComponent();
        posts = [
            {
                id:1,
                title:'title 1',
                desc:'description 1'
            },
            {
                id:1,
                title:'title 1',
                desc:'description 1'
            },
            {
                id:1,
                title:'title 1',
                desc:'description 1'
            },
            {
                id:1,
                title:'title 1',
                desc:'description 1'
            }
        ]

        mockPostService = new MockPostService();
    })
})
```

- As we had spied the post service the methods inside it doesnt return any value soo we need to return dummy observable value from it with `mockPostService.deletePost.and.returnValue(of(true));`.

- Now we can start writing to the testcases for the posts component for the delete method as like mentioned below as as we learned till the time.

**.not.toEqual(expecdValue) :-** `expect(post[1]).not.toEqual(post[2])` we can check not equality in the testcases.

```
describe('delete',()=>{

  beforeEach(()=>{
    mockPostService.deletePost.and.returnValue(of(true))
    component.posts = Posts;
  })

    it('should delete the post when post passed to it',()=>{
      component.delete(Posts[1])
      expect(component.posts.length).toBe(2)
    });

    it('should call the deletePost method in the sevice only once',()=>{
      component.deletePost(Posts[1])

      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
    });

    it('deleted post should not match in posts',()=>{
      component.deletePost(Posts[1])

      posts.forEach((post)=>{
      expect(post).not.toEqual(post[1])
      })
    });

})
```

### TestBed (Resolve All the dependencies with testBed)

TestBed is provided class by the angular itself to resolve all the dependencies with the component by creating a module for it and using all the dependencies for that component.

**Steps :-**

- **Creating Module with testBed :-**

  We can create module with `TestBed.configureTestingModule()` which will acts as the angular module itself with the entities like providers, imports, declarations and etc.

- **Initializing component in testbed :-**

  We consider the component in the testbed as a class and we can add the component in the declaration itself like `providers:[postComponent]`.

  And we need to initialize the component with the testbed as like mentioned below.

  ```
  component = TestBed.inject(PostsComponent);
  ```

  And now we can use the components methods like `component.deleteObj()`.

- **Initiazling service in testbed :-**

  We cant directly inject service in declarations because it have direct dependency of http module soo we need to create `jasmine.createSpyObj(['method','method'])` first.

  And we need to use that `mockPostService` in the declration as like mentiond below.

  ```
  TestBed.configureTestingModule({
    providers: [
      postComponent,
      {
        provide:mockPostService,
        useValue:mockPostService,
      }
      ]
  })
  ```

### Angular TestBed In Detail

The Angular Test Bed (ATB) is a higher level Angular Only testing framework that allows us to easily test behaviours that depend on the
Angular Framework.

Trying to test whether changes in the state of our application trigger changes in the view without the Angular Test Bed is complicated,However with the ATB it's much simpler.
**Most Important Parts of TestBed :-**

- **imports :-**

  We import the things used in html file or modules for resolving directives erros like formsModule and MatSelect module soo it wont throw errors.

- **declarations :-**

  We add components, directives, and pipes in the declarations which are used in html component.

- **providers :-**

  We add the things which are injected in the component's constructor here we dont need to create assined variable with `testbed.get()`.




**Declaration of angular test bed :-**

```
// Configuration of testbed
TestBed.configureTestingModule( {declarations :
[Banner Component ] }) ;

// fixture is the instance with the dom elements and component instance
const fixture =
TestBed.createComponent (Banner Component) ;

// Taking only component instance
const component = fixture.componentInstance;

// assert
expect(component) .toBeDefined () ;
```

**Steps in testbed :-**

- `TestBed.configureTestingModule( {declarations : [Banner Component] });` -
  There's no need to declare or import anything else . The default test
  module is pre-configured with something like the BrowserModule from
  @angular/platform-browser.

- After configuring TestBed, you call its createComponent() method. `const fixture = TestBed.createComponent(Banner Component);` `TestBed.createComponent()` creates an instance of the BannerComponent, adds a corresponding element to the test-runner DOM, and returns a ComponentFixture.

- To Access the component instance we use `Component= fixture.componentInstance` This will give you to access all the properties and methods in the component class.

### Creating component with testbed and checking component isdefined

**.toBeDefined() :-** checks the component is defined or not.

**Creating Component with testbed :-**

```
describe('PostComponent',()=>{
  let fixture : ComponentFixture<PostComponent>;
  let comp:PostComponent;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[PostComponent]
    })

    fixture = TestBed.createComponent(PostComponent)
    comp = fixture.componentInstance();
  })
})
```

**Checking the component is defined :-**

```
it('should create component using TestBed',()=>{
  expect(comp).toBeDefined();
})
```

### Fixture NativeElement (fixture.nativeElement)

For acessing the component's ALL HTML DOM elements which can be executed on the browser only we can acess it by `component.nativeElement` like `let bannerEl = component.nativeElement;`.

On this banner Element we can use the methods like `.querySelector(), .getElementByClassName()` and all soo we can get the exact HTML element out of it.

And then we can check the element's value and all the things on it.

```
let component = fixture.getComponent(PostComponent);
  it('should have title Todo with Service in <h1></h1>', () => {
  let h1 = bannerElement.querySelector('h1')
  let value = 'Todo List with Service'
  expect(h1.textContent).toEqual(value)
  })
```

**Most Imp :- nativeElement can't understand the directive and all the angular things soo we need to use the debugElement for that.**

### Fixture DebugElement (fixture.debugElement)

NativeElement only works when the application will be running on the browser and if the application is running out of the browser or the server side then nativeElement will not be available and the testcases will fail because it didnt got the nativeElement.

DebugElement provides the comopnent's Dom wrapper which can be used on server side rendering to debug the html elements and test the html element and which provides a lot of methods, querySelector, directiveSelector and all which nativeElement does not provides.

**Most Imp :- nativeElement can't understand the directive and all the angular things soo we need to use the debugElement for that, and we can get the directives and all as well with the help of `debugElement.query(By.directive())`.**

**BanneElement with debugElement :-**

- Create Fixture from the testbed like `let fixture = TestBed.createComponent(comopnent)`.

- Create the DebugElement from the fixture as like mentioned below.

  ```
  let fixture: ComponentFixture<PostComponent>;
  let debugElement:DebugElement;

  beforeEach(()=>{
    fixture = TestBed.createComponent(TodoListComponent)
    debugElement = fixture.debugElement;
  })
  ```

- Create Banner Element for getting the HTML Tree as like mentioned below.

  ```
  let fixture: ComponentFixture<PostComponent>;
  let debugElement:DebugElement;
  let bannerElement:HTMLElement;

  beforeEach(()=>{
    fixture = TestBed.createComponent(TodoListComponent)
    debugElement = fixture.debugElement;
    bannerElement = debugElement.nativeElement;
  })
  ```

- Now We can acess all the methods on the bannerElement as like mentioned below.

  ```
  let h1 = bannerElement.querySelector('h1')
  expect(h1.textContent).toEqual(value)

  ```

### Test The HTML Dom with testBed

As we knew the fixture returns bannerComponent which runs in test-runtime dom along with the components class instance.

**Steps :-**

- `const bannerDebugEl : DebugElement = fixture.debugElement;` -

  Soo we can acess the debug element with `const bannerElement = fixture.debugElement` which provides a lot of things like nativeElement even out of the browser and lot of thing like for selecting element,class,directive, id etc.

- `const bannerElement : HTMLElement = bannerDebugEl.nativeElement;` -

  Soo we can acess the html element with `const bannerElement = bannerDebugEl.nativeElement` which is full html Template of the component.

- On the banner element we can use the querySelector and id selector and all things for acessing the dom element.

  `const p = bannerElement.querySelector( ' p ' ) ! ;`

  This would select the html element p.

- Now we need to check its value with `p.textContent` which its value and we can check with `.toEqual(expected output)` as like mentioned below. `expect(p.textContent) . toEqual( ' banner works ! ' ) ;`

**Throughout Ex: :-**

```
  it(' should have <p> with "banner works ! " ' , () => {
  conșt bannerElement : HTMLElement = fixture.nativeElement;
  const p = bannerElement.querySelector( ' p ' ) ! ;
  expect(p.textContent) . toEqual( ' banner works ! ' ) ;
  });
```

### Refresh state of html template after assigning data to it

We cab refresh the state of `bannerDebugEl.nativeElement` with the help of `fixture.detectChanges()` which will work as like reload to the html template and assigns all the data and properties to the html element.

### schemas:[NO_ERROR_SCHEMA]

In the `TestBed.configuration({schemas:[NO_ERROR_SCHEMA]})` this will prevent all the console errors while testing.

### Testing HTML Element Practically

To test the HTML Element from the component's template there are steps as followed :

- Create Necessary Variables for the componentClass and DebugElement, bannerElement and fixture and the dependencies as like mentioned below.

  ```
  let component: TodoListComponent;
  let bannerElement:HTMLElement;
  let bannerDebugElement:DebugElement;
  let fixture: ComponentFixture<TodoListComponent>;
  let apiService = jasmine.createSpyObj('ApiService',['get','post','put','delete']);
  let todoService = jasmine.createSpyObj('TodosService',['getAllTodos','addTodo','deleteTodo','updateTodo']);
  ```

- Create TestBed Configuration in `beforeEach()` to run before every test as like mentioned below.
  ```
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        {provide:TodosService,userValue:todoService},
        {provide:ApiService,useValue:apiService},
      ]
    })
    .compileComponents();
  });
  ```
- Assign the variables values as in `beforeEach()` like mentioned below.

  ```
    beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    bannerDebugElement = fixture.debugElement;
    bannerElement = bannerDebugElement.nativeElement;
    fixture.detectChanges();
  });
  ```

- Create Initialization Test as like mentioned below.

  ```
   it('should create', () => {
    expect(component).toBeTruthy();
  });
  ```

- Write Your Own Testcase as like mentioned below.

  ```
    it('should have title Todo with Service in <h1></h1>', () => {

    // Getting HTML Element from component's banner Element.
    let h1 = bannerElement.querySelector('h1')

    let value = 'Todo List with Service'

    expect(h1.textContent).toEqual(value)
  })
  ```

### DebugElement in depth

**debugElement.methods() :-**

- **`.query() :-`**
  This will return single html elemnt.

  **get html element with .query() :-**

  - **`By.css('#id' or '.class' or 'element') :-`**

    We can get the specific html element form the debug element by querying the html element as like mentioned below.

    ```
    let h1 = bannerDebugElement.query(By.css('h1')).nativeElement
    ```

    We will get only the h1 tag from the debug element with the above snippet.

- **`.queryAll() :-`**
- **`.queryAllNodes() :-`**

### Resolve Service Dependencies for component with TestBed

We can resolve the service dependencies for the component with TestBed configuration as like mentioned below.

We can declare the component in the declaration and the dependencies in the providers as like mentioned below.

```
  let apiService = jasmine.createSpyObj('ApiService',['get','post','put','delete']);
  let todoService = jasmine.createSpyObj('TodosService',['getAllTodos','addTodo','deleteTodo',

    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        {provide:TodosService,userValue:todoService},
        {provide:ApiService,useValue:apiService},
      ]
    })
```

**Most Imp :- We should not use the orignal service class for testing because it will give the api call and can increase the traffic of the server.**

**Recommended Approach :- Use the `jasmine.createSpyObj()` for mocking the service and set the return value to it like `mockPostService.getPosts.and.returnValue(of(Posts))`, This will mock the return value for the mockservice method.**

**Ex :**

We have todoList component in which one Method calling service for getting todos with `todoService.getAllTodos()` and in the component `getAllTodos()` method calls service for the getting todos soo we can write the testcase as like mentioned below.

```

  it('should all the todos while initializing',()=>{

    // dum data for setting returnvalue for the service
    let todos = [{id:1,task:'task 1'},{id:2,task:'task 2'},{id:3,task:'task 3'}]

    // setting returnValue
    todoService.getAllTodos.and.returnValue(todos)

    // We can call the ngOnInit() method directly from the component class.
    component.getAllTodos();

    // assert
    expect(component.tasks.length).toEqual(3)
  })
```

### Mocking the Child component And adding that component in testBed

While component testing If our component have any child component it will throw an error in the console soo we need to mock the child component for the isolated testing.

**Steps for Mocking the child component :-**

- Create Component in the testfile itself with the component directive and the class as like mentioned below.

  ```
  @component({
    selector:'app-post'.
    template:'<div></div>'
  })
  class MockChildComponent{
    // any input or output properties
  }
  ```

- And we need to include this Component's Class in the declarations of the testbed.

  ```
  TestBed.configureTestingModule({
    declrations:[ParentComponent,MockChildComponent]
  })
  ```

Thats how we can mock the child component for the isolated component testing.

### How to check child component Element creation count in template (Where we run child component in \*ngFor)

For that we need to Create DebugElement first and from it we need to query the div in which that child component's element `<app-todo></app-todo>` is used as like mentioned below.

```
it('should create one post element for each post',() => {
  const debugElement = fixture.debugElement;
  const postElements = debugElement.queryAll(By.css('.classname'))

  expect(postElements.length).toEqual(POSTS.length)
})
```

In the above testcase we have got the all postElement with the Help of `debugElement.queryAll()` and we had queried with classname `By.css('.class')` and we had checked its length with the posts array.

### Child Component Testing From Parent component (By.Directive)

First we need to check that from our parent component how many child component's has been created if we are running in the `*ngFor`, for that we need to use `fixture.debugElement.queryAll(By.directive(component))` which will return the array of debug elements as we are doing queryAll and we can acess the debugElements of the child components throuht that array.

**Most Imp :- When we call `fixture.detectChanges()` it will call ngOninit of parent component as well as child component.**

**Testcases for checking exact numbers of components as compared to posts :-**

```
it('should create exact numbers of components as compared to posts',()=>{
  // retuns the child components debug elements array
  let childDebugEl = fixture.debugElement.queryAll(By.directive(Postcomponent)

  expect(childDebugEl.length).toEqual(posts.length)
})
```

### Acess Child component Instance in parent component

For the integration testing to check the child component along with its parent component we need to acess the child component's instance as well soo we can do that with `debugElements array` by `debugElement.queryAll(By.directive(components))` and we can get instance of the component like mentioned below.

```
let debugElements = fixture.debugElement.queryAll(By.directive(Postcomponent))

let firstChildComp = debugElement[0].componentInstance

// Now we can acess its properties and methos from this.
```

**Testcase for checking is child component getting exact post :-**

```
it('should check whether exact post is sending to PostComponent' , () ⇒ {
  mockPostService.getPosts.and.returnValue(of(POSTS));

  fixture.detectChanges();

  const postComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent));

  for (let i = 0 ; i < postComponentDEs.length; i+) {
  let postComponentInstance = postComponentDes[i].componentInstance as PostComponent;
  expect(postComponentInstance.post.title) .toEqual(POSTS[i].title);
}
});
```

### Services Unit Testing with TestBed

- **Register, Initialization and getting instance :-**

  We can initialie and configure the service with testBed with `TestBed.configureTestingModule({declrations:[service]})`.

  We can get the service instance with `TestBed.get(service)` but its depreceted now soo now we can get the service instance with `TestBed.inject(service)`.

- **Dependencies Mangement of services with testBed :-**

  We can resolve the service dependencies by adding the service Object in the declarations as well with `{provide:service, useValue:mockService}` soo it will provide the service as the dependency with the mentioned useValue Mock Service and our dependencies got resolved.

### Resolve HTTP Client Dependencies (Ways)

There are several ways to resolve the HTTP client dependencies as like mentioned below.

**With Creating Spy Object For HTTP Client Module :-**

We can create Spy Object for the HTTP Client and pass it to the service instance as like mentioned below.

```
let httpSpy;
let calculatorService;

beforeEach(()=>{
  httpSpy = jasmine.createSpyObj('HTTPClientModule',['get','put','post','delete'])
  calculatorService = new calculatorService(httpSpy)
})
```

**httpClientModule Spy Object in the Traditional way Implementation with Testbed :-**

We above resolved the dependency but we have used the `calculatorService = new calculatorService(httpSpy)` which is not traditional method soo with the testbed e need to configureTestingModule for it as like mentioned below.

```
let calculatorService;
let httpClientModule;
beforeEach(()=>{
  let httpSpy = jasmine.createSpyObj('HTTPClientModule',['get','put','post','delete'])
  TestBed.configureTestingModule({
    declarations:[
      CalculatorService,
      {
        provide:httpClientModule,
        userValue:httpSpy
      }
    ]
  })

  calculatorService = TestBed.inject(CalculatorService)
  httpClientModule = TestBed.inject(HttpClientModule) as jasmine.createSpyObj<HttpClient>
})
```

### HTTP Client Testing Module

In the HTTP Client Module there is httpTestingService which use backEndHandeller to make the api calls.

BUT

When we use the httpClientModule while writing unit tests it will make the actual http Calls which going to use our resouces and consume server bandwidth soo its not the best practice and we can resolve this things by simulating the httpCalls with the help of `import {HttpClientTestingModule} from '@angular/common/http/testing'`.

Ex :

```
describe('Http Client Testing Module' , () ⇒ {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() ⇒ {

  TestBed.configureTestingModule({
  imports: [HttpClientTestingModule],
  });

  // We need to inject httpClient for this
  httpClient = TestBed.inject(HttpClient);

  httpTestingController = TestBed.inject(HttpTesting Controller);

  it('should call the testurl with get Request' , () ⇒ {

    httpClient.get<Data>(testUrl) .subscribe();

  });
});
```

### HTTP Testing Controller

HTTP Testing Controller is the module which manipulates the simulated http calls with the help of `HttpClientTestingModule` like sending resopnse to it or header and all the things which we manipulate with the http request.

**Checking is URL called one times only :-**

We can make sure that is our api called with our url with the help of `httpTestingController.expectOne(url)` which checks is api called made with the request one times or not and returns the api call object.

```
// Subscription method make the dum api call
httpClient.get(url).subscribe();

// This will check the call on that url and returns the api call object
const req = httpTestingController.expectOne(url);
```

**Passing Response to the call :-**

We can pass the response what the simulated api call should return with the help of `req.flush(response)` as like mentioned below.

```
let resData = {name:"Shiv", age: "18" }
httpClient.get(url).subscribe();
const req = httpTestingController.expectOne(url);

// resData will be returned in the subscription
req.flush(resData)
```

**Check that data return in the response is the testData :-**

```
let resData = {name:"Shiv", age: "18" }

// Here we can check the data returned in the subscription is same with respData or not.
httpClient.get(url).subscribe(data=>expect(data).toEqual(resData));

const req = httpTestingController.expectOne(url);

// resData will be returned in the subscription
req.flush(resData)
```

**Checking Method Type :-**

We can check the request type by acessing its `.request.method` property of api Call request object which we will get with `const reqObj = httpTestingController.expectOne(url);` as like mentioned below.

```
expect(reqObj.request.method).toEqual("GET");
```

### Checking Multiple HTTP URL and HTTP Responses

Previously we used to use the `httpTestingController.expectOne(url)` for checking if any http call made with that url or not but We can check how many http Calls made by a url with the help of `httpTestingController.match(url)` method which will return us the number of http Call Objects array, And we can check multiple http Calls with this method.

**Checking 3 http calls made by this url or not and got the response data exact the same as we passed :-**

```
it('should call the api 3 times with this url',()=>{
  let url = 'data/'
  let testData = [{id:1,title:'Shiv',{id:1,title:'Shiv'}]

  httpClient.get(url).subscribe((data)=>{
    expect(data).toEqual(testData[0])
  })

  httpClient.get(url).subscribe((data)=>{
    expect(data).toEqual(testData[1])
  })

  // returns array of http call objects
  let requests = httpTestingController.match(url);

  expect(requests.length).toEqual(2);

  requests[0].flush(testData[0]);
  requests[1].flush(testData[1]);
})
```

### Resolving HTTP Client Dependencies with httpTestingModule

Previously we needed to mock the http client with `jasmine.createSpyObj('httpClient',['get','post','put','delete'])` which does not give api calls mentioned in the service.

BUT

Here if we us the `httpClientTestingModule` in the `imports:[]` of of `jasmine.configureTestingModule({})` soo it will give call actual method but with the `dumBackEndHandler` soo we need to check the urls and all with the actual urls of service methods.

**Ex : Checking service url called and which method getting called :-**

```

let postService:PostService;
let httpTestingController: HttpTestingController;

beforeEach(()=>{
  TestBed.configureTestingModule({
    imports: [httpClientTestingModule],
    declarations:[PostService]
  })

  postService = TestBed.inject(PostService)
  httpTestingController = TestBed.inject(HttpTestingController)

})

it('should call the exact url and get method along with along with correct return data',(done:DoneFn)=>{

postService.getPosts().subscribe((res)=>{
expect(res).toEqual(dumData)
})

const req = httpTestingController.expectOne(actual url);

request.flush(dumData)
expect(req.request.method).toEqual("GET")

})
```

### How to Verify No other request should be made rather than the mentioned one. (httpTestingController.verify())

`httpTestingController.expectOne(url)` it just concerns with the url which we have mentioned and if any request is making with the some minor changes still it will pass the testCase which should not be happen.

Soo

In some situations you are calling multiple api Calls in one testcase but at some point you need to make sure that no other request should be persuing while executing some requests soo we can make sure that with `httpTestingController.verify()`.

**Making Sure that No other request is making expecing the mentioned url :-**

```
it('No recalling the api with modified url', ()=>{
  postService.getSinglePost(1).subscribe()
  postService.getSinglePost(2).subscribe()

  const req  = httpTestingController.expectOne(url/1)

  // This will verify that url which we have mentioned with the api calls
  httpTestingController.verify();
  expect(req.request.method).toEqual("GET");
})
```

OR we can use the `httpTestingController.verify();` in the `afterEach()` as well as like mentioned below as the best practice.

```
it('No recalling the api with modified url', ()=>{
  postService.getSinglePost(1).subscribe()
  postService.getSinglePost(2).subscribe()

  const req  = httpTestingController.expectOne(url/1)

  // This will verify that url which we have mentioned with the api calls
  httpTestingController.verify();
  expect(req.request.method).toEqual("GET");
})

afterEach(()=>{
  httpTestingController.verify()
})
```

### trigger Event Handeller (Button Click of child component)

Trigger Event Handeller handels the events of html elements as like mentioned below.

**Child post component's button click should call parents delete method with exact post:-**

```
it('should call delete method when post component button is clicked ' , () ⇒ {

  spyOn(component, ' delete');

  mockPostService.getPosts.and.returnValue(of(POSTS));

  fixture.detectChanges();

  let postComponentDes fixture.debugElement.queryAll(By(PostComponent));

  for (let i = 0; i < postComponent DEs.length; i ++) {

  postComponentDEs[i].query(By.css(' button')).triggerEventHandler(' click' , { preventDefault: () ⇒ {} });

  expect(component.delete).toHaveBeenCalledWith(POSTS[i]) ;
}
});
```
In the above code we are querying the html button element with `.query(By.css('button'))` and we are calling method with `.triggerEventHandler('eventName',{data})` and we are spying on the of component's delete method to use it and we are checking is that method calling with the specific post with `expect(component.delete).toHaveBeenCalledWith(POSTS[i]);`.

And thats how we can trigger the events on the html element.

### Emit event from child compoenents instance

Above we have targeted the html element and we have used the `triggerEventHandler` for the click of that button but we can do that in another way as well by emitting event from the child compoenents instance as like mentioned below.

```
it('should call the parent component's delete method after emitting delete Event',()=>{
  spyOn(component,'delete')
  // For ngOnInit() subscription
  mockPostService.getPosts.and.returnValue(of(POSTS));
  fixture.detectChanges();

  let postComponentDes = fixture.debugElement.queryAll(By.directive(Postcomponent))

  for(let i = 0; i<POSTS.length;i++){
    (posComponentDes[i].componentInstance as PostComponent).delete.emit(POSTS[i])
    expect(component.delete).toHaveBeenCalledWith(POSTS[i])
  }

})
```

In the above code we are getting the debugElement's array with `fixture.debugElement.queryAll(By.directive(PostComponent))` and we are calling its `delete.emit()` method from child component's componentInstance and checking with `expect(component.delete).toHaveBeenCalledWith(POSTS[i])`.


### RoutingModule Configuration with Test Bed

For resolving the dependencies of routingModule in the component's testing we need to create the mockActivatedRoute  for using its `activedRoute.snapshot.paraMap.get('')` as like mentioned below.

```
let mockActivatedRoute;
let mockPostService;
let mockLocation;
let fixture : ComponentFixture<Postcomponent>;
beforeEach(() ⇒ {

// Here we have created mock ActivatedRoute Object form which we can use get method.
let mockActivatedRoute = { 
  snapshot: {
    paramMap: {
      get: () = {
        return '3' ;
      },
    };
let mockPostService = jasmine.createSpyObj([ ' getPost' , 'updatePost']);

let mockLocation = jasmine.createSpyObj([' back']);

TestBed.configureTestingModule({

  declarations: [PostDetailComponent],
  providers: [
  { provide: Location, useValue: mockLocation },
  { provide: PostService, useValue: mockPostService },
  { provide: Activated Route, useValue: mockActivated Route },

  ]
});
  fixture = TestBed.createComponent(PostComponent)
});
```

### Writing TestCase For Is post loaded in the Post Component

Here below we are going to write a test case for is post loading in the html is equal to the post or not as like mentioned below.

```
it('should render the post title in the h2 element',()=>{
  
  fixture.detectChanges();
  let post = {id:1,title:'Shiv',desc:'He is a programer'}

  // In the ngOnInit() getPosts method is being callled.
  mockPostService.getPosts.and.returnValue(of(post));

  // element
  let element = fixture.debugElement.query(By.css('h2')).nativeElement;

  // OR
  let element = fixture.nativeElement.querySelector('h2');

  expect(element.textContent).toEqual(post.title)
})
```

### Mocking Store For Select method

If you have selectors included in your functions and that part is not covering your code then you can create mock store with dispatch and select function as like mentioned below.

```
let mockStore = {
  select(){

  }
  dispatch(){

  }
}

Testbed.configureTestingModule({
  provide:[
    {provide:Store, useValue:mockStore}
  ]
})
```
**Most Important :- `When we add providers to somthing first it will be the things which are injected in the constructor of component's class and we dont need to create variable and assign to `TestBed.get()`.`**

### Router Navigation testing

If your component have some funtions which are calling `router.navigate` or `router.navigateByUrl` then we need to inject Router in the testCase with the help of inject and we get the instance of router in the callback as like mentioned below.

**stub :-** 

When you call and.stub, or if you never call and.callThrough, the spy won't call the real function. It's really usefull when you don't want to test an object's behavior, but be sure that it was called. Helping you to keep your test truly unitary.

```
it('navigateToUsers() should navigate to /users,inject([Router],(router:Router)=>{
  spyOn(router,'navigate')
  comopnent.navigateToUsers()
  expect(router.navigate).toHaveBeenCalled();
  expect(router.navigate).toHaveBeenCalledWith(url);
  expect(router.navigate).toHaveBeenCalledWith(url,{config});
}))
```