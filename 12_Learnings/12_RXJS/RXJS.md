# RXJS

Rxjs stands for Reactive Extension API and JS refers to the javascript

Its reactive extension api's written in javascript.

### Data Stream

The data coming in the application continuously from different different soures called as streams.

**Streams of data can be : -**

- Synchronus Data
- Asynchronus Data
- Getting Data from the server as http calls
- dom events
- functions with return values

These all the data streams are processed differently in js with different process.

In rxjs we can process all the streams in observables.

### Observer
Observer are the components where we suscribe to the observables and the observers will get the response if observable calls the next method and on the response they can execute the block of code and they will get the latest data through subscription.

### Observables
Observables are the interfaces to handle the asynchronous opration by using observer software pattern in which a subjects who which emits the values and the observers will be notified for the same and their next method gets executed.

In Rxjs subjects are called as observables.

We can create Observables with subjects in the angular as like mentioned below.
```
let data: Subject = new Subject<type>();

subject.next(data);


subject.subscribe(data=>conosle.log("Data got here"));
```

### Subjects

Subjects are used for data transfer where we dont have parent child relation in compoents so we cant use the input and output soo we need to use the subjects.

Subject is the special type of ovservable and observer also which can be used as observable as well which can be used as observer as well.

We can transfer the data in betweeen components and service as well with `next`.

**Difference between Observable and Observer :-**

- **Observable :-** We can suscribe to the observable we can use as pipe as well.

  1. **Methods** -
     - `Pipe` -
     - `Suscribe` -


- **Observer :-**
  1. **Methods** -
     - `Next` -
     - `Error` -
     - `Complete` -

**Multicasting in Subjects :-**

**How to data transfer in cross components :-**
We can create Subjects which will have multiple observers which will get the latest emited values as like mentioned below.
```
// Service File
let data:Subject = new Subject<any>();
subject.next(data);


// Componennt 1

ngOnInit(){
  data.subscribe(data=>console.log("Data Got here"))
}
// Componennt 2
ngOnInit(){
  data.subscribe(data=>console.log("Data Got here"))
}
```

Thats how we can communicate with cross components with the help of subjects and observables.


### from and fromEvent oprator (Converts arrays, promised and events into observable)

- **from() :-**

  We can convert any kind of data or promised and everything in observables with `from(data)` oprator as like mentioned below.

  ```
  let arr = [1,2,34,5]
  let arr$ = from(arr)

  // Methods for observables
  arr$.subscribe({
    next:(data)=>console.log(data),
    error:(err)=>console.error(err),
    complete:()=> console.log("Observable Completed")
  })

  // OR
  arr$.subscribe(nextCallback, errCallback, CompleteCallback)
  ```

- **fromEvent()**

  We can convert HTML dom events into observable with `fromEvent(htmlElement,event)` oprator as like mentioned below.

  ```
  fromEvent(document.getElementById('submit-btn','click')).subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete : () => console.log("completed")
  })
  ```

### Creating Custom Observable

We can create our custom Observable as well with the help of `new Observable<type>((observer)=>{})` which will take an Observer object in which there will be 3 methods liek `next()`, `error()` and `complete()` respectively and whenever we call here the methods like `observer.next(data)` observers next method will get executed nad observer will get the data as well in the parameter of callback as like mentioned below.

```
ngOnInit(){
  let myObservable = new Observable<number>((observer)=>{
    for(let i=0;i<5;i++>){
      observer.next(i)
    }
    observer.complete();
  })
}

getMyobservalbeValues(){
  myObservable.subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("Observable Completed")
  })
}
```


### Different Ways of Creating Observer

There are 3 Ways to create observer with `next()`, `error()` and `complete()` methods as like mentioned below.

**Ways to create Observer :-**

- By passing Object as like mentioned below :-
  ```
  myObservable.subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete : () => console.log("completed")
  })
  ```

- By passing Class :-

```
class ObserverClass{
  next(data:any){
    console.log(data)
  }

  error(error:any){
    console.log(error)
  }

  complete(){
    console.log("completed")
  }
}

myObservable.subscribe(ObserverClass)
```

- By Passing Callbacks in order as shorthand :-

```
myObservable.subscribe((data)=>console.log(data),(err)=>console.log(err),()=>console.log("completed"))
```

**Most Imp :- Mostly in the industry we use the shorthand in which we only pass the callbacks in the order as per our requirement as like if we only need next method we only pass 1 callback or if we need error as well we pass first next callback and error callback so on.**

### Ways to Unsubscribe Observers

When we subscribe to an Observable it gets executing again ang again for all the time and angular inbuilt observables like `params,statusChanges,valueChanges` get unsuscribed by own after components gets destroyed.

BUT

If we dont unsubscribe from an Observable it will cause an memory leak problem which can be serveral problem soo we need to unsubscribe our rxJs observables by our own and we can do that like mentioned below.

**Ways to Unsubscribe Observers :-**

- **By Storing It in variable :-**

  When we do subscribe to an Observable it returns an type of 
  Subscription which we can save in a variable and we can unsubscribe to that variable in the ngOnDestroy function as like mentioned below.

  ```
  let subscription:Subscription;
  ngOnInit(){
    this.subscription = myObservable.subscribe(res=>console.log(res));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  ```

- **By adding Observables subscription to the single variable :-**

  We can add multiple subscriptions to the single variable as well and we need to unsubscribe only that single subscription as like mentioned below.

  ```
  let subscriptions:Subscription;

  ngOnInit(){
  let myObservablesubs = myObservable.subscribe(res=>console.log(res))
    subscriptions.add(myObservablesubs);
  }
  
  ngOnDestroy(){
    subscriptions.unsubscribe();
  }
  ```

- **By using takeWhile Alive :-**

  We can unsubscribe all subscription with the help of `@AutoUnsubscribe()` decorator on the component, service and all and we need to use `takeWhileAlive(this)` in the pipe method for unsubscribing that subscription on the component's destroy method as like mentioned below.
  ```
  @AutoUnsubscribe()
  export class MakeBillsComponent extends onInit{

    ngOnInit(){
      this.myObservable.pipe(takeWhileAlive(this).subscribe(res=>console.log)
    }
  }
  ```
### How to unsubscribe Observables
When you create an custom Observable in which even if you unsubscribe the observers subscription the custom observables will still execute and it can cause the memory leak problem which can be servel proble.

We can Prevent Memory leak by using anonymus function in the custom observables in whcih you need to clear the all logic and which will be called `when you unsubscribe observer as well any error occur while emitting values in observable` as like mentioned below.

```
let myObservable = new Observable((observer)=>{
  let interval = setInterval(()=>{
    i = 0;
    observer.next(i++);
  },1000)

  // Anonymus function will be executed when observer is unsubscribed and error occured while emitting values in observable
  return ()=>{
    clearInterval(interval);
  } 
})
```

### Rxjs Oprators
RxJs oprators are the functions which take configuration parameters and return the functions.

Oprators Basically takes an observable and return modified observable or cold observable.

**Types of Rxjs Oprators :-**
  There are basically 2 different types of Oprators in which we can create observables with raw data and input with creation oprators and there are pipeable oprators which take observables as an input and return modified or another observable.

- **Pipeable Oprators :-**

  Pipeable Oprators can be combined using pipe oprator as like mentioned below.
  ```
    myObservable.pipe(op1(),op2(),op3())
  ```

- **Creation Oprators :-**

  Creation Oprators can be combined with raw data as like mentioned below.
  ```
  of([1,2,3,5,6]).subscribe(console.log(res=>console.log(res));
  from([1,2,3,5,6]).subscribe(console.log(res=>console.log(res))
  fromEvent(document.getElementById('asdfasd),eventName)
  ```

### Filter and Map Oprators

Filter Oprator is used to filter the data before sending it to the subscription.
```
let myObservable = interval(1000)

myObservable.pipe(
  filter(num=>num%2==0).subscribe(res=>{

    // Will print only even numbers
    conosle.log(res); 
  })
```
Map Oprator is used for modifying the data before sending it to the subscription.

```
let myObservable = interval(1000)

myObservable.pipe(
  map(num => "Number" + num).subscribe(res=>{

     // "Number 1" and so on...
    console.log(res)
  })
)
```

We can combine the both of oprators in the pipe method as like mentioned below.

```
let myObservable = interval(1000)

myObservable.pipe(
  // Will filter the even numbers only and send further
  filter(num=>num%2==0),

  // Will Map the Even Number String to the response and send further
  map(num => "Even Number" + num)

).subscribe(res=>{
  
  // Finally we will get Even Number 0 soo on...
  console.log(res)
})
```
### How to choose right oprator from rxjs oprators categories

There are 100+ rxjs operators for the different purposed on the website and those are categoriesed as following : 

- **Transforming :-**
  Transformation oprators take input as observable and return observable will be totally different transformed observable.

- **Filtering :-**
  Filtering Oprators just filters the observable and retuns the same observables in the filtered format or way.

- **Combination (Joining) :-**
  Combination oprators allows you to combine 2 or more observable in different ways and returns combined single observable.

- **Utility :-**
  Utility Oprator will controls how or when values would be emitted to the subscribe without changing the values.

- **Conditional :-**
  Conditional Oprators are siimilar like to filtering oprators which produces the values when the certain condition is met.

- **Aggregate :-**
  Aggregating Oprators look at all values produced by observables and produce single aggregate value like min, max, count and average etc.
  
- **Multicasting :-**
  Multicasting oprators are the unique to subjects.

- **Error Handelling Oprators :-**
  Error Handelling oprators are usefull for handelling the error and retry and all the stuff related to errors.


### Marble Diagrams
Rxjs Oprators are difficult to understand what the oprators does exactly soo there are unique type of diagrams which represents the functionality and working of the rxjs oprators which are important to understand.

<img src="./marble-diagram.png" style="width:100%">

**Explaination of diagram :-**

- **First Line :-** 
  
  First line represents the source observable which is emitting the values which are represented by the the coloured circles.

- **X or | in lines :-**

  The `X` represents error occured in the observable stream or `|` in the lines represents the completion of the oprator and if there is nothing then its an infinite observable stream.

- **Middle Box :-**

  Middle box represents the the name of oprator and some example oprations from which every values will goes from.

- **Down Line :-**  

  Down Line is the output of emitted values represented by specific colurs are the output values of input observable represented by the same colour.


### Buffer Oprator
Buffer Oprator which is pipeable filtering oprator stores the values in the buffer and emits only the values when the inner observable emits in the array as like mentioned below.

```
  sec3Interval$: Observable<number> = interval(3000);

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(
      buffer(this.sec3Interval$)
    ).subscribe(res=>console.log("Buffered Values =>",res));
  }
}
```
this will emit the buffered values until the 3 seconds after every 3 seconds as after 3 seconds `sec3Interval$` emitting an observable.

**Note :- This will not store previous value it will only emits the last buffer values rather than all values from the start.**

**UserCases :-**
### BufferCount Oprator
BufferCount Oprators which is pipeable filtering oprator is the same as buffer oprator but it does not take the inner observable rather than it will take the `buffer size` and `new buffer size` as 2 arguements like `bufferCount(5,2)` this means it will store the previous 5 values and it will create new buffer after every 2 values like [0,1,2] and then [1,2,3] and so on.

```
ngOnInit(): void {
    interval(1000).pipe(
      bufferCount(3,3)
    ).subscribe(res=>console.log("Buffered Values =>",res));
  }
```

In this above example it will start executing the value 3 in array every 10 seconds like [1,2,3] and then [4,5,6] and so on.

**Note :- With the help of this oprator we can emit the values in the size whatever we want in the form of array.**

**UserCases :-**
### BufferTime Oprator
BufferTime Oprator which is pipeable filtering oprator Keep the values in the buffer untill the mentioned time crossed and then emits the values as like mentioned below.

```
interval(1000).pipe(
      bufferTime(4000)
    ).subscribe(res=>console.log("Buffered Values =>",res));
```

This will execute the subscription after every subscription and it will return all the values stored in the buffer and will create the new buffer when the next interval completes with the new values.

**UserCases :-**
### BufferToggle Oprator
BufferToggle Oprator  which is pipeable filtering oprator Keep the values in the buffer from the opening and closing and when the closing emits the observable it will emit the stored values and again start the buffer after the opening only.

```
ngOnInit(){
  let opening = interval(3000)
  let closing = ()=>interval(6000)

  interval(1000).pipe(
    bufferToggle(opening, closing)
  ).subscribe(res=>console.log("Buffered Values : ",res)
}
```

This will emit the values in the form of array after every 6 six seconds from its opening which occred 3 second before like `[4,5,6]` and so on.

**UserCases :-**
### BufferWhen Oprator
BufferWhen Oprator which is pipeable filtering oprator takes the factory function which returns the observable and it stores the values and emits the values when the internal observable does but the most important difference in buffer oprator and bufferwhen is `we can include multiple and dynamic observables and it does emits the value when the observable get completed as well`

```
ngOnInit(){
  let x;
  interval(500).pipe(tap(res)=>{x=res},bufferWhen(()=>{
    if(x>5){
      return interval(1000)
    }
    return interval(2000)
  })).subscribe(res=>{
    console.log("Buffered values : ",res)
  })
}
```

This will emits the stored values after every 2 seconds untill it crosses the 5 and then it will return the observable after every interval.

**UserCases :-**
### Take Oprator

Take is the pipeable filtering oprator  `take(count)` which returns the values till the count reached to the provided count.

```
ngOnInit(): void {
    interval(1000).pipe(
      take(3)
    ).subscribe(res=>console.log("Buffered Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```
This will emit the only first 5 values and the observable will be complete and further data will be discarded and observable will be completed.

**UserCases :-**
### TakeLast Oprator

TakeLast Oprator is the pipeable filtering oprator `takeLast(count)` which will emits the last count number of values when the observable completes and if the observable completes before than mentioned count it emits all the values till it and if observable never get completed then it will never be executed.

```
  ngOnInit(): void {
    interval(1000).pipe(
      take(10), takeLast(3)
    ).subscribe(res=>console.log("Buffered Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```

It will emit the last 3 observables at once when the observable completes after 10 values.

**UserCases :-**

### TakeUntil Oprator

TakeUntil Oprator is the pipeable filtering oprator `takeUntil(opratorObservable)` which takes another oprating observable which will stop executing values and completes the observable when oprating observable first emits its values.

```
  sec3Interval$: Observable<number> = interval(10000);

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(
      takeUntil(this.sec3Interval$)
    ).subscribe(res=>console.log("Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```

This will emit values on 1 sec of interval untill 10 seconds and then it will complete the observable.

### TakeWhile Oprator

TakeWhile Oprator is the pipeable filtering oprator which takes an predicate function as an arguement which return boolean value true or false and when the values get false for the first time the observable will be discarded and observable will be completed and if we pass the 2 second parameter which is `inclusive boolean` it will return the first false value as like well as mentioned below.

```
  ngOnInit(): void {
    interval(1000).pipe(
      takeWhile((value,index)=> value<5,true)
    ).subscribe(res=>console.log("Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```

It will return the values till the 4 as they are less than 5 and condition getting true but when it returns 5 and it gets false but we mentioned inclusive true so it will return 5 and then completes the observable else it would have been returned values till 4 and observable compelte on value 5.

### Skip Oprator

Skip Oprator is another pipeable filtering oprator which is opposite of `take()` oprator which take `count:number` as input which skips that number of first values and it will continue emitting values.

**Note :- If the skip number is equal or greater than the no of emiteed values it will throw an error.**

```
ngOnInit(): void {
    interval(1000).pipe(
      takeWhile((value,index)=> value<5,true),skip(2)
    ).subscribe(res=>console.log("Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```
It will return the further values till the 5 by skipping the first 2 emissions.

### SkipLast Oprator

SkipLast oprator is the pipeable filtering oprator which skips the number of values passed as an argument type of number `skip(input:number)` from the last and when it first skip value hits it starts emitting the stored values in further order as like mentioned below.

```
  ngOnInit(): void {
    interval(1000).pipe(
      takeWhile((value,index)=> value<5,true),skipLast(2)
    ).subscribe(res=>console.log("Values =>",res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```

It will emits the first 0 to 3 values and skip the last 2 vlaues and directly executes the completion block.


### SkipUntil Operator
SkipLast oprator is the pipeable filtering oprator in which we can pass the notifier observable. SkipUntil operator will skips the emitting values until notifer havent emitted its first value like mentioned below.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
    interval(500).pipe(
      skipUntil(this.btnEvent)
    ).subscribe(res=>this.values.push(res),()=>null,()=>{
      console.log("Observable Completed")
    });
  }
```

When the buttons will be clicked it we start getting source observable values and it will psuhed in array and will be visible on the screen.

### SkipWhile Operator

SkipWhile oprator is the pipeable filtering oprator in which we can pass the predicate function in which returns the boolean values and SkipwhileOprator will hold off the values until the predicate function returns false and then source observbale will start executing.


```
ngOnInit(){
  interval(1000).pipe.(
    take(10),skipWhile((res)=>{
      return res>5;
    })
  )subscribe(res=>this.values.push(res),()=>null,()=>{
      console.log("Observable Completed")
    });
}
```

Out of 10 values it will skip the values till 4 and start executing the value from 5 to 9 as we took 10 values from the interval.

### Distinct Oprator
Distinct is another pipeable filtering oprator which returns only distinct(unique, non-duplicate) observables by comparing old emitted values as like mentioned below.


```
ngOnInit(){
  of(1,2,3,4,5,1,2,3,4,5).pipe(distinct()).subscribe(res=>console.log(res))
}
```

This will only return 1,2,3,4,5 only once as they are uinque values out of it.

### DistinctUntilChanged Oprator

DistinceUntilChanged is another pipeable filtering oprator which checks the current value with the last value if the same it will skip else it will emit the value.

```
ngOnInit(){
  of(1,2,2,3,4,5,1).pipe(distinctUntilChanged()).subscribe(res=>console.log(res))
  // 1,2,3,4,5,1
}
```

`DistinceUntilChanged(comparator?,keyValue?)` It have 2 optional parameters which helps us to modify its default condtion `cur===prev` and that value will be skipped but in the comparator functions we get 2 values in the callback function `prev, and current` and we can skip the values by returning true as per our checking or with our custom logic as like mentioned below.

```
ngOnInit(){
  of(1,2,2,3,4,5,1).pipe(distinctUntilChanged((prev,cur)=>{
    return cur===prev+1;
  })).subscribe(res=>console.log(res))
  // 1,3,5,1
}
```

**Most Imp :- It uses `===` which checks the refrence as well so it will not skip the object withe the same is because as they are object even thought they are smae they are stored at different memory location and it will not skip them as like mentioned below about its behavior.**

```
ngOnInit(){
  let employees = [
    {id:1,name:'Shiv},
    {id:1,name:'Shiv},
    {id:2,name:'Shiv 2},
    {id:3,name:'Shiv 3}
  ]
  from(employees).pipe(distinctUntilChanged()).subscribe(res=>consoel.log(res))

// It will not skip the second object as they are same though but they are stored in the different location.
  /*{id:1,name:'Shiv}
    {id:1,name:'Shiv}
    {id:2,name:'Shiv 2}
    {id:3,name:'Shiv 3
  */
}
```

**Key Selector :-**

If we want to check with the previous value with some key like with the help of id or name rather than to check in `cur.name==prev.name` we can keep the statement same in the comparator function and we can mention the key as the seond param as like mentioned below.


```
ngOnInit(){
  let employees = [
    {id:1,name:'Shiv},
    {id:1,name:'Shiv},
    {id:2,name:'Shiv 2},
    {id:3,name:'Shiv 3}
  ]
  from(employees).pipe(distinctUntilChanged((prev,cur)=>{cur==prev}),(k)=>key.id).subscribe(res=>consoel.log(res))

// Now it will check with statement we mentioend in the comparator function along with the key selector so it `will check prev's id with cur's id` and skip if it returns true.
  /*{id:1,name:'Shiv}
    {id:2,name:'Shiv 2}
    {id:3,name:'Shiv 3
  */
}
```

### DistinctUntilKeyChanged Oprator

DistinctUntilKeyChanged is another pipeable filtering oprator which is specifically used for the objects for their filtering based on checkubg prev object provided key with the current's one.

`DistinctUntilKeyChanged('key',(prev,cur)=>{//custom logic for filterint rather than triple equality oprator})`

```
ngOnInit(){
  let employees = [
    {id:1,name:'Shiv},
    {id:'1',name:'Shiv},
    {id:2,name:'Shiv 2},
    {id:3,name:'Shiv 3}
  ]
  from(employees).pipe(distinctUntilKeyChanged('id',(prev,cur)=>typeof(cur)==type(prev)).subscribe(res=>consoel.log(res))

// Now it will check with statement we mentioend in the comparator function along with the key selector so it `will check prev's id's type with cur's id's type` and skip if it returns true.
  /*{id:1,name:'Shiv}
   {id:'1',name:'Shiv}
    {id:2,name:'Shiv 2}
  */
}
```

### Filter Oprator
Filter Oprator is another pipeable filtering oprator which takes predicate function as an argument if its returns true then it will emit the value else the value will not be emitted.

`filter((value,i)=>{})` i provides the index of emission from the subscription.

```
ngOnInit(){
  of(1,2,3,4,5).pipe(filter((value,i)=>{
    return value%2==0;
  }).subscribe(res=>{
    console.log(res)
  })
}
```
Above example only emits the even values which are only able to pass the mentioned conditions.

### Sample Oprator
Sample Oprator is another pipeable filtering oprator which emites the recently emitted value from source observable when the notifier observable emits anything and the values emitted before before the last emitted value will not be passed to the suscriber.

```
 sec3Interval$: Observable<number> = interval(2000);
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      interval(1000).pipe(sample(this.btnEvent)).subscribe(res=>console.log(res))
    
  }
```
Whenever the user clicks on the button it will emit the last emitted interval value only.


### RxJs Audit Oprator
Audit Oprator is another pipeable filtering oprator which ignores the value for a duration returned by durationSelector function `audit(()=>duration)` and when the duration oprator is completed or emits the value it will emit the most recently emitted value of source observable.

```
 sec3Interval$: Observable<number> = interval(2000);
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      interval(1000).pipe(audit(()=>this.sec3Interval$)).subscribe(res=>console.log(res))
    
  }
```
`interval(1000)` will eit the values after every second where that values would be on hold untill the `sec3Interval` function emits value and then last emitted value of source observable will be 2, and again after 2 seconds value it will emit the most recently emitted value of source observable.


### Throttle Oprator

Throttle Oprator is another pipeable filtering operator which ignores the values for a duration returned by durationSelection function and it takes the `ThrottleConfig` which tells which values should throttle `leading - last value` and `trailing - first value` as like mentioned below.

```
sec3Interval$: Observable<number> = interval(2000);

ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      interval(1000).pipe(throttle(()=>this.sec3Interval$,{leading:true,trailing:true})).subscribe(res=>console.log(res))
  }
```

This will emit most recent value as well as the most first value when it started to ignore the values.

### First Oprator

First Oprator is another pipeable filtering oprator which can be used to filter the first value without passing any arguements or passing an predicate function which returns boolean value and as the second parameter `first(()=>,defualtValue)` it takes the default value and if there is no default value it will throw error `noValueError`. 

It calls the complete after emitting first value.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(first()).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```
Above code will only emit the 1 and completes the observer.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(first(value=>value==0)).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```
Above code will return noValue Error as default value is not passed and no value has met the requirements in predicate function.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(first(value=>value==0,13)).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```
Above code will check every vaule with condition and if not matched it will return the default value.


### Last Oprator

Last Oprator is another pipeable filtering oprator that takes the last value emitted by source observable default and when the predicate function passed it returns the last value which matches the condition if no value matches the condition it will throw an error else it will return the default value if provided.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(last()).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```
This will emit 6 and calls the complete.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(last(value=>value>5)).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```

This will return 6 as its the last value which matches the condition.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(last(value=>value>6)).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```

This will throw an error because no value matched the condition and nor the default value provided.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'),'click')
      of(1,2,3,5,6).pipe(last(value=>value>6,10)).subscribe(data=>console.log("First Oprator Value: " + data),error=>console.log("Error: " + error),()=>console.log("Completed: "))
  }
```

This will return 10 as its the default value will be emitted because no value matched the condition.

### Debounce Oprator

Debounce Oprator is another pipeable filtering oprator which takes duration selector function as an argument and when that interval or duration is completed it will emit the last emitted value.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    interval(1000)
      .pipe(debounce((value) => interval(2000)))
      .subscribe((res) =>
        console.log(
          'Last stored value after duration selector completion :',
          res
        )
      );
  }
```

This will emit the last stored value after 2 seconds of hold and interval.

### ElementAt Oprator
ElementAt Oprator is another pipeable filtering oprator which takes index and default value as an argument which returns the i'th value emitted from source observable else it will return the default value if the index is out of range and `ArguementOutofRangeError` if no default value is provided.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(0,1,2,3,4,5)
      .pipe(elementAt(3))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
This will return the value at 3rd index as its available in the source observable.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(0,1,2,3,4,5)
      .pipe(elementAt(7,10))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
This will return the value 10 as 7th index is out of range.


```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(0,1,2,3,4,5)
      .pipe(elementAt(7))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
This will return `ArguementOutofRangeError` as index is out of range.

### ignoreElements Oprator

ignoreElements ignores all values emitted from source observable and returns empty Observable and only calls complete or error callback when error occured or source observable completed.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(0,1,2,3,4,5)
      .pipe(ignoreElements())
      .subscribe((res) =>console.log('Value :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```

### Single Oprator

Single Oprator is another pipeable filterting oprator which takes predicate function as an arguement which makes sure that source observable is emitting only one value and will throw error `sequence has emitted more than one value` if it emits more than one value as like mentioned below and it reuturns that single value and call the complete block.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(0)
      .pipe(single())
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
As no predicate is provided and only single values is emitted then it will print the value and compeltes the observable.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2)
      .pipe(single(res=>res%2==0))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
Weather its emitting the 2 values but only one value is meeting the condition followed by the predicate function so it will print the value and compeltes the observable.


```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5)
      .pipe(single())
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
This will emits the error for more than one values are emitted.


```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4)
      .pipe(single(res=>res%2==0))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
It have more than one values which meeting the condition soo it will still throws error for more than one values are emitted.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1)
      .pipe(single(res=>res%2==0))
      .subscribe((res) =>console.log('Value at 3rd index :',res),err=>console.log("Error :",err),() => console.log("Completed"));
  }
```
If it doesnt finds any single value weather throught predicate function matching or no value emitting from source observable then it will return undefined and completes the observable.

### Map oprator
Map oprator is pipeable transformation oprator which takes project function as an argument which transforms each value emitted from source observable which modifies the value and send it to observer.

In the callback of map it returns the value as first param and index as the second parameter like `map((val,index)=>{})`.

```
ngOnInit() {
  of(1,2,3,4,5).pipe(map((val,index)=>{
    return val*10
  })).subscribe((res)=>{
    // Every value will be multiplied by 10
    console.log(res)
  })
}
```

With the map oprator we can pass only required data which we need from whole lot of data in the suscriber.


### MapTo Oprator
MapTo Oprator is another pipeable transformation operator which takes an constant value as an argument and returns that constant value rather than source observable value whenever it emits.

```
ngOnInit() {
interval(500).pipe(mapTo("Shiv")).subscribe(res=>console.log(res));
}
```

On the emission of every value it will emit shiv to the observer.


### ajax in rxjs
ajax is the wholesome methods provided by the RxJs library to make the api calls without using angular http module quickly without even setuping services.

It needs to be imported from `rxjs/ajax` as like mentioned below.
```
import {ajax} from 'rxjs/ajax';
```

**Uses of ajax :-**
- **For Simple Get Request With Full Response :-**

  For simple get request without setting up the whole service with the methods we can make api call with ajax method from rxjs as like mentioned below which returns whole reponse with headers and status code as well.

  ```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    ajax('https://jsonplaceholder.typicode.com/posts').pipe(
      // We are mapping only resopnse to suscriber
      map(res=>res.response)
    ).
    subscribe(res=>{
      console.log(res)
    })
  }
  ```

- **For Simple Get Request With Only Response Content :-**

  If you want only response content then you can call `ajax.getJson()` method which returns only the content of the response.

  ```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    ajax.getJSON('https://jsonplaceholder.typicode.com/posts').
    subscribe(res=>{
      console.log(res)
    })
  }
  ```

- **For Any type of Api call with passed configuration  :-**

  If you want to make different api calls with different methods and configuration like headres, payload through body and others things by passing configuration object in `ajax(configuration)` as like mentioned below.

  ```
    ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    ajax({
      url:'https://jsonplaceholder.typicode.com/posts',
      method:'POST',
      headers: {
        'content-type': 'application/json',
        customHeader:'shiv'
      },
      body: {
        id:`1`,
        title:'Software Engineer',
        name:'Shivprasad Kounsalye'
      }
    }).
    subscribe(res=>{
      console.log(res)
    })
  }
  ```

### Higher Order Observables
Higher order observable are the observable which returns the observable inside the observable as like mentioned below.

```
of (1, 2, 3, 4).pipe (
  map ((value) => {
    return
    ajax (`https://jsonplaceholder.typicode.com/posts/${value}`);
    })
)
.subscribe ((data) => {
  data.subscribe ((response) => {
    console.log (response) ;
  });
});
```
In the above code mapping taking value and calling ajax call which returning inner observable with the map value which returning outer observable soo we had returned ajax call from the map which was already returning observable so the suscriber would get the observable of ajax not the data of ajax due to we had only suscribed to outer observable and inner observable is still returning observable so we need to suscribe to the inner observable as we had suscribed to data which we got in observable callback that data.suscribe with get the data of innerobservable.

We can resolve this problem by using Higher order mapping observable which ends with `Map` such as map, switchMap and concatMap or mergeMap provided by rxjs.

Which mappes the inner observable value to outer observable and automatically unsubscribe to inner observable and we can get the values of inner observable in the outer observable directly in its suscribe method.

We can reolve that by usin following approach for example : 

```
of(1, 2, 3) //outerobservable
    .pipe(
        map((value) => {
            return of(value * 10); //inner observable
        }),
        mergeMap((obs) => obs)
    )
    .subscribe((data) => {
        console.log(data)
    });
```
In this case rather than double subscribing to inner and outer Observable as well we used `mergeMap` which will map the inner observable value to the outer observable and we will get the values directly in the suscriber.

**Returning the observable value with mergeMap directly :-**

```
of(1, 2, 3) //outerobservable
    .pipe(
        mergeMap((obs) => of(value * 10));
    )
    .subscribe((data) => {
        console.log(data)
    });
```

As we used Map above which was mapping the value to inner observable we are using mergeMap directly which will map the value to inner observable as well as it will map inner observable value to outer observable and send the value directly to suscriber rather than observable.


**Applications :-**

- We can get the id from of and we can get the details from the api which also returns the observable so in the case it will return directly the details to suscriber.

- We can use the higher order observable in such scenario that which also going to return the observable as mentioned above.

- When we need to return an another observable inside oprator or anything which already returns an observable means in the case of observable inside the observable.


### MergeMap
MergeMap is pipeable higher order transformation oprator which takes 2 arguements form which first is the callback in which you get the value and index and the second one is the concurrent value means how much values you need to take at a time  like `mergeMap((value)=>{},concurrentNumber)`and all values concurrently from the source observable and returns the logic with all value at a time and in the suscriber it will wait which observable will get resolved first and execute in that order.

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5).pipe(mergeMap((id)=>{
      console.log("Post id :",id)
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    })).subscribe((res)=>{
      console.log("Post =>",res.response)
    })
  }
```
This will take all values at a time and calls all the apis at a time execution order will depend on the resopnse of the api.


If we want to execute it not to take all values at a time rather than to take values 1 by 1 then we need to pass the second parameter `concurrent number` and it will take the values 1 by one and execute the logic as like mentioned below.
```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5).pipe(mergeMap((id)=>{
      console.log("Post id :",id)
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    },1)).subscribe((res)=>{
      console.log("Post =>",res.response)
    })
  }
```

**Application :-**
- When we want all outer observable emitted value at once in inner observable and we dont cares about the order of execution of inner observables.
- When we need to Map all source observable value at once to another observable at the same time.
- When you need all source observable values at once pass it all to another observable and needs to execute in the order of completion of observables.


### mergeMapTo Oprator
mergeMapTo is another pipeable higher order transformation oprator which take single parameter which is constant observable which will return the data directly of the inner observable in the outer observable suscriber as like mentioned below. 

```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5).pipe(mergeMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`))).subscribe((res)=>{
      console.log("Post =>",res.response)
    })
  }
```

this will call the api with the constant id as we mentioned on the emission of every outer observable value.

**Applications :-**
- When we want top execute the inner observable at a same time for the all values emitted from the source observable.
- When we want to map all outer observable values to constant inner observable value.
- When we want to return the same constant inner observable value all the time in the suscriber.

### ConcatMap Oprator
ConcatMap is another pipeable higher order transformation operator which maps inner observable values to outer observable observable but it will waits untill the inner observable completes before proecessing the next value and if the value has emitted in between the completion of inner observable the value will be kept in the buffer.

ContacMap is indirect implementation of `MergeMap(()=>{},1)` MergeMap operator with concurrency value set to 1.


```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(5,4,3,2,1).pipe(concatMap((id)=>{
      console.log(id)
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    })).subscribe((res)=>{
      console.log("Post =>",res.response)
    })
  }
```

Above code will wait until the api call completes for emitted id and then only it proceeds with further id.

**Appilcations :-**
- When we want to give priority to both outer and inner observable  and both should be executed and then only new source value to take in consideration.
- When we want to map the source observable value to inner observable one by one and you want to wait before inner observable completion before mapping another source observable value.
- When we want to keep execution of source observable in buffer until the inner observable completes.

### ConcatMapTo Oprator
ConcatMap is another pipeable higher order transformation operator which maps the outer observable value to always same inner value which waits untill the inner observable completes and it will execute in the sequential order fashion and the inneer will be executed with constant value becasue merMapTo doesn't take callback in which you will get the outer observable values.

ContacMap is indirect implementation of `MergeMapTo(of(100),1)` MergeMap operator with concurrency value set to 1.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(5,4,3,2,1).pipe(concatMapTo(interval(5000))
    ).subscribe((res)=>{
      console.log("Emitted Value after 5 Seconds =>",res)
    })
  }
```

Above code will return outer observable value after every 5 seconds.

**Applications :-**
- When we want to give priority to both outer and inner observable  and both should be executed and then only new source value to take in consideration.
- When we want to map the source observable value to same observable all the time.
- When we want keep the execution in buffer of source observable untill the constant internal observable gets completes.

### ExhaustMap Oprator
ExhaustMap is another pipeable higher order transformation observable maps the outer observable values to inner observable and waits till the inner observable completes, Most importantly It ignores the values emitted by the source observable inbetween the completion of inner observable and after completion of inner observable it takes the latest emitted value and keep going.

```
  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    interval(1000).pipe(
      filter(id=>id>0),
      tap(res=>console.log(res)),
      exhaustMap(id=>{
        console.log("Id Taken for execution =>",id)
        return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
      }),
      take(3)
    ).subscribe(res=>{
      console.log(res.response)
    })
  }
```

Above Code will skip the id's until the previous api call completes and takes the next emitted id for api call.

**Application :-**
- When we want to give the more priority to inner observable rather than outer observable and its completion.
- When we want to wait until the completion of execution of inner observable with the value took from source observable.
- When we want to ignore the in between emitted values until the completion of inner observable with some value.
- When you want to give more priority to the inner observable more than outer observable.


### SwitchMap Oprator
SwitchMap is another pipeable higher order transformation oprator which maps teh outer observable value to inner observable and if outer observable emits the value before completing the inner observable with previous emitted value it drops the execution of inner observable and switch instanly to new observable and thats why its called as swtichMap oprator.


```
ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5).pipe(switchMap(id=>{
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    })).subscribe(res=>{
      console.log("Response for id 5",res.response)
    })
    // ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
```

As the values will be emitted instantly from the of oprator so emittion of the next value will be even before previosu api call completes soo all api's will be called but it will get cancelled immediately and the only last api will get called because there no another value is emitting after the last id.
<img src="./switchmap.png">

**Application :-**
- When you want to cancel the inner observable if outer observable emits teh value before completion of inner observable.

- When you want give the most priority to to outer observable value and want to perform some logic but with the latest value emitted from soruce observabl so switchmap will cancel previous execution and take the latest value in consideration.

### SwitchMapTo Oprator
SwitchMapTo Oprator is another pipeable higher order transformation operator that maps outer observable to inner constant observable and which swithes to new execution of inner observable if any value emitted from source observable before completing the inner observable.

```

  ngOnInit(): void {
    this.btnEvent = fromEvent(document.getElementById('btn'), 'click');
    of(1,2,3,4,5).pipe(switchMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`))).subscribe(res=>{
      console.log("Response for id 5",res.response)
    })
    // ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
```
It will call api for same id but all will get cancelled expecting the last emitted value because source observable will emit the latest value before even completion of inner observable till the last value.

**Applications :-**
- When you want to return some constant observable when the source observable emits the value.

- When you want to give more priority to the order of emittion values form source observable rather than returning inner observable.

### Subjects (UniCasting and MultiCasting)

Subject is an observable which multicast the values to many observable means multiple observers can be registered to single observable and it will emit the data to each and every observer.

Subjects are also observer which have methods like `Next, Error, Complete`.

Mens we can create the observable and we can emi the values with the help of subjects as well as we can get those values at multiple points with the subscriber.

Subjects can act as observers as well as observables.

```
// service
mySub:Subject<number> = new Subject<number>();

// Emitting Value from any components
service.mySub.emit(1);


// Component 1
service.mySub.subscribe(res=>{
  // 1 will be printed after emitting of value 1 from service through next method.
  console.log(res)
})

// Component 2
service.mySub.subscribe(res=>{
  // 1 will be printed after emitting of value 1 from service through next method.
  console.log(res)
})

// Component 3
service.mySub.subscribe(res=>{
  // 1 will be printed after emitting of value 1 from service through next method.
  console.log(res)
})
```

### MultiCast and Unitcast
Observers executes the observerables and emitts the data to its observers.

**Unicast :- Observable can only send the data at a time to single observalbe without again reexecuting it is called as unicast.**

**MultiCasting :- Observables can send the data at a time to multiple observers with the help of using subjects as a middleware without reexecuing observables again and again called as Multicasting.**

### MultiCasting and UniCasting with Observables

In unicasting inside observables logic will execute the multiple times as much as observers suscribed to it but if you want to execute that heavy logic only once you can suscribe it with subject and you can suscribe the subject from multiple observers which will not execute the observables logic as like mentioned below.

<img src="./uni-multi-casting.png">

**UniCasting :-**

```
obs$:Observable<number>;

ngOnInit() {
  this.obs$ = of(1,2,3);

  this.obs$.subscribe(res=>console.log("Observer1 =>",res),err=>console.log(err),()=>console.log("Observer1 Complete"))

  this.obs$.subscribe(res=>console.log("Observer2 =>",res),err=>console.log(err),()=>console.log("Observer2 Complete"))

  this.obs$.subscribe(res=>console.log("Observer3 =>",res),err=>console.log(err),()=>console.log("Observer3 Complete"))
}
```
In the above Code execution will be it will execute the first observer executes the observable and completes it and then it will move towards another observable as like mentioned below.
```
Observer1 =>1
Observer1 =>2
Observer1 =>3
Observer1 Complete

Observer2 =>1
Observer2 =>2
Observer2 =>3
Observer2 Complete

Observer3 =>1
Observer3 =>2
Observer3 =>3
Observer3 Complete
```

**MultiCasting :-**

```
obs$:Observable<number>;

sub$:Subject<number>

ngOnInit() {
  this.obs$ = of(1,2,3);

  this.obs$.subscribe(this.sub$);

  this.sub$.subscribe(res=>console.log("Observer1 =>",res),err=>console.log(err),()=>console.log("Observer1 Complete"))

  this.sub$.subscribe(res=>console.log("Observer2 =>",res),err=>console.log(err),()=>console.log("Observer2 Complete"))

  this.sub$.subscribe(res=>console.log("Observer3 =>",res),err=>console.log(err),()=>console.log("Observer3 Complete"))
}
```
In the above code we have one observable and we are passing the subject as observer and we are subscribing the subject from all observables soo it will emit the values at the same time to all the observers rather than completing one and then moving towards second as like mentioned below.

```
Observer1 =>1
Observer2 =>1
Observer3 =>1

Observer1 =>2
Observer2 =>2
Observer3 =>2

Observer1 =>3
Observer2 =>3
Observer3 =>3

Observer1 Complete
Observer2 Complete
Observer3 Complete
```

**Applications :-**
- When you have complicated and heavy logic and you want to execute it only once even after having multiple observers.

- When you wnat to emit the values to observers by your owne rather than another observables with the help of next error and complete methods of subject.

- When you want the values at the different places but withuot delay and at the same time.

### Cold Observables and Hot Observables

Cold Observables are the unicasting observables which produce the values inside the observable and which will executes only if some observer subscribes to it else it wont execute like `of(0,1,2,3)`.

Hot Observables are the multicasting observables which produce the values outside the observable and which will execute atleast once even if there is no observer assigned to it like `fromEvent(domRef,'eventName')`.

Subjects plays very important role while converting the cold observable into hot observable by providing the single subscription to source observable to let it execute only once as well as emitting the values at multiple things at the same time.


### How to Convert Cold observables to Hot Observables

The main difference between hot observable and cold observable is hot observable emits the same value to multiple observers due to value is being generated outside of observable and cold observable emits the different values to each observer due to the value creation is being done in observable itself.

Soo We can simply convert the cold observable into a hot observable by generating the value outside of the observable as like mentioned below.

```
    // Observable1$ is cold observable as its producing value inside observable and both observers will receive different values.
    const observable1$ = new Observable<number>((observer)=>{
      observer.next(Math.random())
    })
    observable1$.subscribe(res=>console.log("Observer 1 Res "+res))
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))

    // Convered the Observable1$ to hot observable by producing the value outside of the observable so the value will be same for all observers.
    const rand = Math.random();
    const observable1$ = new Observable<number>((observer)=>{
      observer.next(rand)
    })

    observable1$.subscribe(res=>console.log("Observer 1 Res "+res))
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))
```

**Converting Cold Observable into Hot observable with subject :-**

```
  // Second observable will execute the interval again and it will receive the values from 0.
    const observable1$ = interval(1000);

    observable1$.subscribe(res=>console.log("Observer 1 Res "+res))

    setTimeout(() => {
      observable1$.subscribe(res=>console.log("Observer 2 Res "+res))  
    }, 3000);


      // Now observable1$ will send the same values in both observables as the subject only once subscribed to it and rest observers will receive the latest emitted values.

      const observable1$ = interval(1000);
      const subject$ = new Subject();
      observable1$.subscribe(subject$)

      subject$.subscribe(res=>console.log("Observer 1 Res "+res))

      setTimeout(() => {
        subject$.subscribe(res=>console.log("Observer 2 Res "+res))  
      }, 3000);
```

We can convert the cold observables to hot observable with the rxjs Oprators like `multicast` and `unicast` and which we will have look onwards.

### MultiCast Oprator (Cold to Hot Observable)
Multicast Observable is an pipeable cold to hot conversion oprator which takes an arguement subject to it and retuns a connectable observable for which we need to run the `.connect()` method after all observer binding as like mentioned below.

```
  const observable1$ = interval(1000).pipe(multicast(new Subject())) as ConnectableObservable<number>;
  
  
  observable1$.subscribe(res=>console.log("Observer 1 Res "+res))
  
  setTimeout(() => {
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))  
  }, 3000);
  
  observable1$.connect();
```

### Publish Oprator (Cold to Hot Observable)

Publish is an pipeable cold to hot conversion oprator which creates an subject inside of it automatically without taking any arguments and returns connectable observable as like mentioned below.

```
  const observable1$ = interval(1000).pipe(publish()) as ConnectableObservable<number>;


  observable1$.subscribe(res=>console.log("Observer 1 Res "+res))

  setTimeout(() => {
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))  
  }, 3000);

  observable1$.connect();
```

### Publish With refCount (Cold to Hot Observable)

As we seen the publish earlier as it used to return connectable observable for which we need to call the connect method but if we need to call the connect the method automatically after first subscription we can achieve that with the help of `refCount()` oprator as like mentioned below.

```
  const observable1$ = interval(1000).pipe(publish(),refCount()) as ConnectableObservable<number>;

  observable1$.subscribe(res=>console.log("Observer 1 Res "+res))

  setTimeout(() => {
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))  
  }, 3000);
```

### Connectable Oprator (Cold to Hot conversion)

Connectable Oprator is an connectale observable creation oprator takes an observables as an arguement and is the observables which converts the cold observables to hot observable.

We suscribe to the connecteable observables and we get the same values emitted in every observer.

**Note :- connect(observable) returns and connectable observale which does not execute on suscribe itself like normal observable. we need to call `.connect()` method to start the observables execution as like mentioned below.**

```
  const observable1$ = interval(1000);
  const connectable$ = connectable(observable1$);


  connectable$.subscribe(res=>console.log("Observer 1 Res "+res))

  setTimeout(() => {
    connectable$.subscribe(res=>console.log("Observer 2 Res "+res))  
  }, 3000);

  connectable$.connect();
```

### Share Oprator (Cold to Hot conversion)

Share Oprator does the same thing with non-deprecated oprator and it behaves the same way like using `pipe(publish(),refcount())` oprator which creates the subject automatically inside of it and refcount starts execution of it after first subscription without `.connect()` method as like mentioned below.

```
  const observable1$ = interval(1000).pipe(share());
  
  observable1$.subscribe(res=>console.log("Observer 1 Res "+res))

  setTimeout(() => {
    observable1$.subscribe(res=>console.log("Observer 2 Res "+res))  
  }, 3000);
```

### Behavious Subject
Behaviour subject is specialization of subject which takes the default value as an parameter and which stores the last emitted value which can be emitted to the observers.

We declare the behavior subject as `const behaviorSubject$ = new BehaviorSubject(0)`.

The main difference between subject and behavior subject is that subject doesnt holds the last emitted value and if new observer comes in between the emittion values it will directly emit the value to that observer when it will emit again else the next observer will never receive the value.

Behavious subject holds the last emitted value soo that when new observer comes in between the emittion emittion values it will receive the last emitted value rather than waiting for next values emittion as like mentioned below.

**Execution order for normal subject as mentioned below :-**

```
 
    let subject$ = new Subject();
    
    subject$.subscribe(data => console.log("Subject Obs 1 =>",data));
    subject$.next(1);
    subject$.subscribe(data => console.log("Subject Obs 2 =>",data));
    subject$.next(2)

    // Subject Obs 1 => 1
    // Subject Obs 1 => 2
    // Subject Obs 2 => 2
```


**Execution order for normal Behaviour subject as mentioned below :-**

```
    let behviourSub$ = new BehaviorSubject(0);

    behviourSub$.subscribe(data => console.log("Behviour Sub 1 =>",data));
    behviourSub$.next(1);
    behviourSub$.subscribe(data => console.log("Behviour Sub 2 =>",data));
    behviourSub$.next(2);

    // Behviour Sub 1 => 0
    // Behviour Sub 1 => 1
    // Behviour Sub 2 => 1
    // Behviour Sub 1 => 2
    // Behviour Sub 2 => 2
```

### Replay Subject
Replay subject is another specialization of subject which replays all previous emitted  values to the new suscriber.

It takes `new ReplaySubject(bufferSize, windowTime)` as an argument by which we can configure its no of values to store with bufferSize and and till how much time we should hold the values with hte help of windowTime which is second arguement to its constructor.


```
   let behviourSub$ = new ReplaySubject();
    behviourSub$.next(1);
    behviourSub$.subscribe(data => console.log("Replay Sub 1 =>",data));
    behviourSub$.next(2);
    behviourSub$.next(3);
    behviourSub$.next(4);
    behviourSub$.next(5);

    setTimeout(()=>{
      behviourSub$.subscribe(data => console.log("Replay Sub 2 =>",data));
    },3000)

    // Replay Subject 1 => 1
    // Replay Subject 1 => 2
    // Replay Subject 1 => 3
    // Replay Subject 1 => 4
    // Replay Subject 1 => 5

    // Replay Subject 2 => 1
    // Replay Subject 2 => 2
    // Replay Subject 2 => 3
    // Replay Subject 2 => 4
    // Replay Subject 2 => 5
```
In the above code Even if the another subscription happened after 3 seconds still it will emit all the previous values as well.


```
let behviourSub$ = new ReplaySubject();
    behviourSub$.next(1);
    behviourSub$.subscribe(data => console.log("Replay Sub 1 =>",data));
    behviourSub$.next(2);
    behviourSub$.next(3);
    behviourSub$.next(4);
    behviourSub$.error('error occured');


    setTimeout(()=>{
      behviourSub$.subscribe(data => console.log("Replay Sub 2 =>",data));
    },3000)

    // Replay Subject 1 => 1
    // Replay Subject 1 => 2
    // Replay Subject 1 => 3
    // Replay Subject 1 => 4
    // error occured

    // Replay Subject 2 => 1
    // Replay Subject 2 => 2
    // Replay Subject 2 => 3
    // Replay Subject 2 => 4
    // error occured
```

In the above code Even If error has occured Still it will emit all the previous values along with error to the new subscription.

```
let behviourSub$ = new ReplaySubject(2);
    behviourSub$.next(1);
    behviourSub$.subscribe(data => console.log("Replay Sub 1 =>",data));
    behviourSub$.next(2);
    behviourSub$.next(3);
    behviourSub$.next(4);

    setTimeout(()=>{
      behviourSub$.subscribe(data => console.log("Replay Sub 2 =>",data));
    },3000)

    // Replay Subject 1 => 1
    // Replay Subject 1 => 2
    // Replay Subject 1 => 3
    // Replay Subject 1 => 4

    // Replay Subject 2 => 3
    // Replay Subject 2 => 4
```
In the above code second observer will receive only last 2 emitted values as we had passed buffersize to it.

```
let behviourSub$ = new ReplaySubject(2,2000);
    behviourSub$.next(1);
    behviourSub$.subscribe(data => console.log("Replay Sub 1 =>",data));
    behviourSub$.next(2);
    behviourSub$.next(3);
    behviourSub$.next(4);

    setTimeout(()=>{
      behviourSub$.subscribe(data => console.log("Replay Sub 2 =>",data));
    },3000)

    // Replay Subject 1 => 1
    // Replay Subject 1 => 2
    // Replay Subject 1 => 3
    // Replay Subject 1 => 4
```
In the above code second observer will not receive any value because we have passed the buffersize as well as windowTime in miliseconds after 2 seconds all stored values will be cleared and observer 2 is subscriber after 3 seconds soo it will receive nothing.


### Async Subject
Async subject is another specialization of subject which emits the last value only after completion of the observable.

It can't be use on infinite observables which does not complete because it will never emits value.

If error occures in the observable it will simultaneously complete the observable and it will return the last value which was error to the new subscription.


```
    let asyncSub$ = new AsyncSubject();
    asyncSub$.next(1);
    asyncSub$.subscribe(data => console.log("Async Sub 1 =>",data));
    asyncSub$.next(2);
    asyncSub$.next(3);
    asyncSub$.next(4);
    asyncSub$.next(5);
    asyncSub$.complete()
    

    setTimeout(()=>{
      asyncSub$.subscribe(data => console.log("Async Sub 2 =>",data));
    },5000)
    
    //Async Sub 1 => 5
    // After 5 seconds
    // Async Sub 2 => 5
```

Above code will emit the 5 value afte completion of observable in subscription 1 and after 5 seconds last emitted value was 5 so it will be emitted to subscription 2.

```
 let asyncSub$ = new AsyncSubject();
    asyncSub$.next(1);
    asyncSub$.subscribe(data => console.log("Async Sub 1 =>",data));
    asyncSub$.next(2);
    asyncSub$.next(3);
    asyncSub$.next(4);
    asyncSub$.next(5);
    asyncSub$.error('error occured')
    

    setTimeout(()=>{
      asyncSub$.subscribe(data => console.log("Async Sub 2 =>",data));
    },5000)
    
    //Async Sub 1 => error occured
    // After 5 seconds
    // Async Sub 2 => error occured
```
In the Above Code As the last emitted value was error and it completes the observable it will be sent to subscription1 initially and after 5 seconds it will be emitted to subscription2.

### Void Subject
Void subject is another specialization of observable which does not emit any value and we dont need to send any value in next method which we need to pass it for all other subjects.

```
let voidSub$ = new Subject<void>();
    voidSub$.subscribe(res=>console.log('observer1 :',res))

    voidSub$.subscribe(res=>console.log('observer2 :',res))

    voidSub$.subscribe(res=>console.log('observer3 :',res))
    voidSub$.next()
```
In the above code all observers will be notified with the undefined value.

**Applications :-**
- We can use void subject where we want to use the subject as notifier.
- Where we dont care about value but we care about notifying observers.
- We can use void subject where we dont want to pass any value to its next method.


### PublishBehaviour Oprator (Cold to Hot Observable)

Publish behaviour is another multicasting oprator which converts an cold observable into hot observable which does not executes the observable again and the all observers will receive the same values.

publishBehaviour takes and default value as an arguement and returns an cnnectable observable which does not execute untill its connect method called.

It is an indirect implementation of `behaviourSubject()` in multicasting as like mentioned in the latest implementation of it with `connectable()`.

```
  let hotObs$ = interval(1000).pipe(publishBehavior(100)) as ConnectableObservable<number>;

    hotObs$.subscribe(res=>console.log('observer1 :',res))

    hotObs$.subscribe(res=>console.log('observer2 :',res))

    hotObs$.subscribe(res=>console.log('observer3 :',res))

    hotObs$.connect()
```

In the above code initially subscribe will receive 100 as its an initial value and starts executing the observable and after every second all observers will receive same values at a time.


```
  let hotObs$ = connectable(interval(1000),{
    connector:()=> new BehaviourSubject(100)
  }) as ConnectableObservable<number>;

    hotObs$.subscribe(res=>console.log('observer1 :',res))

    hotObs$.subscribe(res=>console.log('observer2 :',res))

    hotObs$.subscribe(res=>console.log('observer3 :',res))

    hotObs$.connect()
```

In the above code we have implemented the same logic with the latest version of `rxjs 7.0` where `publishBehaviour()` from which it will be deprecated.


**Applications :-**
- When you want to convert Cold observable to hot observable.
- When you want to pass hte defualt value to connectable observable.

### PublishLast Oprator (Cold to Hot Observable)

PublishLast is another multicasting oprator which converts cold observable to hot observable which will execute only once and will send last emitted value after completion of observable to multiple observers.

Its an indirect implmentation of using asyncSubject for multicasting and returning connectable observable.

```

  let hotObs$ = interval(1000).pipe(take(5),publishLast()) as ConnectableObservable<number>;

  hotObs$.subscribe(res=>console.log('observer1 :',res))

  hotObs$.subscribe(res=>console.log('observer2 :',res))

  hotObs$.subscribe(res=>console.log('observer3 :',res))

  hotObs$.connect()
  
  // After 5 seconds
  observer1 : 4
  observer2 : 4
  observer3 : 4
```

In the above code we are taking its first 5 value and completing the observable with `take(5)` after which all observers will receive `4` as its last emitted value as like async subject.


```
  let hotObs$ = connectable(interval(1000).pipe(take(5)),{
    connector: () => new AsyncSubject()
  })
  hotObs$.subscribe(res=>console.log('observer1 :',res))

  hotObs$.subscribe(res=>console.log('observer2 :',res))

  hotObs$.subscribe(res=>console.log('observer3 :',res))

  hotObs$.connect()
```

In the above code we have implemented the same logic in the new way for rxjs 7.0 onwards version as `publishLast()` will be deprecated.

### PublishReplay Oprator (Cold to Hot observable)
PublishReplay oprator is another multicasting oprator which replays the previously emitted values to the new observable at the initial state and continues further as normal observable.

If the observable had error occured in between emitting values and gets complete then it will emit consider the last emitted value error as last value and it emits the error as well to the new observer.

```
let hotObs$ = interval(1000).pipe(publishReplay()) as ConnectableObservable<number>;

hotObs$.connect()

hotObs$.subscribe(res=>console.log('observer1 :',res))

setTimeout(()=>{
  hotObs$.subscribe(res=>console.log('observer2 :',res))  
},3000)

// Execution order
observer1 : 0
observer1 : 1
observer1 : 2
observer1 : 3
observer2 :0
observer2 :1
observer2 :2
observer2 :3
observer1 :4
observer2 :4
```

Above Code will start emitting the values normally in observer 1 and after 3 seconds as soon as observer 2 subscribes then it will first emit all previously emitted values at once and continues emitting the same  values to further observers.

In the latest version of rxjs the same code will be written as folowing.

```
  let hotObs$ = connectable(interval(1000).pipe(take(5)),{
    connector: () => new ReplaySubject()
  })
  hotObs$.connect()

  hotObs$.subscribe(res=>console.log('observer1 :',res))

  setTimeout(()=>{
    hotObs$.subscribe(res=>console.log('observer2 :',res))  
  },3000)
  setTimeout(()=>{
    hotObs$.subscribe(res=>console.log('observer3 :',res))  
  },5000)
```

### Error Handeling in Rxjs
In the Rxjs we have serval oprators for handelling the errors by returning error observable or returning the another observable for further logic.

If error got handled with the error handelling oprators it will not stop the code by throwing an error and we can choose what to do.

### catchError Oprator
catchError oprator is an error handelling oprator which takes an callback as an arguement in which we will get the error as well as the source observable for retrying purpose. 

We can return new Observable through catchError weather it will be error Observable or New observable for further logic

```
    let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('Error Occured');
    })

    source$.pipe(catchError(error=>{
      throw 'Numbers stopped Executing'
    })).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

In the above code we had returned the customized error.

```
    let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('Error Occured');
    })

    source$.pipe(catchError(error=>{
      return of('a','b','c')
    })).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

```

In the above code we are returning new observable to continue the application with further logic.

**Application :-**
- When we dont want to stop application and process due to error we can use the catchError.

- When we want to return New Observable even if error occured.

- When we want to continue the process and application by returning new observable to perform its logic.


### retry Oprator
retry oprator is also error handeling oprator which takes count type of number which will execute the observer that n times.

```
   let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('Error Occured');
    })

    source$.pipe(retry(3),catchError(error=>{
      throw 'Numbers stopped Executing'
    })).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

In the above code it will retry by executing the source observable 3 times and it will return an new customized error which we thrown in catchError.

```
   let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('Error Occured');
    })

    source$.pipe(retry(3),catchError(error=>{
      return of(a,b,c)
    })).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

In the above code it will retry by executing the observable 3 more times and then it then it will return new observable to continue and the flow and complete the observable.

### retryWhen Oprator
retryWhen oprator is another error handelling oprator which takes callback as an argument in which you will get the source observable and we can we can check the conditons on which we will retry or throw error.

As retryWhen oprator returns an observable in the callback for acessing its value we need to `pipe(tap(value=>{}))` to acess the value of observable.

```
let execution = 1;

    let source$ = interval(1000).pipe(tap(res=>{
      if(res>2){
        throw 'Count Excedded than 5'
      }
    }))

    source$.pipe(retryWhen(obs=> obs.pipe(tap(res=>{
      console.log("Error Observable Value =>",res)
      if(execution>2) throw 'Execution execeeded more than 3 times'
      else{
        execution++;
        console.log("Execution Number =>",execution)
        console.log("Retrying...")
      }
    }))
    )).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

```
Response => 0
Response => 1
Response => 2
Error Observable Value => Count Excedded than 5
Execution Number => 2
Retrying...
Response => 0
Response => 1
Response => 2
Error Observable Value => Count Excedded than 5
Execution Number => 3
Retrying...
Response => 0
Response => 1
Response => 2
Error Observable Value => Count Excedded than 5
Error => Execution execeeded more than 3 times
```

When error occures in source observable and it will go in retryWhen with error observable, in which by reading its value.

If execution count is not more than 3 the we are incrementing it and retrying by default.

we are checking the execution count if its greater 3 times then we are throwing error.

And the observable will execute the error block of subscriber after retrying for 3 times and when it thrown error and exited the retry cycle.

### CombineLatest Oprator (Function)
CombineLatest Operator is join and creation oprator (function) which takes an array of observables return the last emitted values from each observable in the form of array after emition of value from any of the observable.

It will get completed immediately if passed an empty array of observables and if any of the observable completes before emitting least one value, And If any of the observable completes after emitting at least one value then if another not then it will emit its last emitted value in every emission.

Order of emitted values wil be the same as passed observables order.

It will not give any response if any observable not emitted any value from them

If any error occurs to any observable it will throw and error and unsuscribes all the observables.

```
   let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        res.next(number++)
      },1000)
    })
    
    let source2$ = new Observable(res=>{
      let number = 3;
      setTimeout(()=>{
        res.next(number++)
      },5000)
    })

    combineLatest(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

    // After 5 seconds
    [4,3]
    [5,3]
    [6,3]...
```

In the above code first source observable already started executing but second will emit its first value after 5 seconds so the response will start from last emitted values from `source1 and source2` like `[4,3]` and then it will emit the values after any of observable will emit the value.


```
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        if(number>6){
          res.error('Crossed 6')
        }else{
          res.next(number++)
        }
      },1000)
    })
    
    let source2$ = new Observable(res=>{
      let number = 3;
      setTimeout(()=>{
        res.next(number++)
      },5000)
    })

    combineLatest(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
    // After 5 seconds
    [4,3]
    [5,3]
    [6,3]
    Error => Crossed 6
```

In the above code first observable will throw an error after value crossed 6 then all observable will be unsubscribed and it will execute its error callback.

```
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
          res.next(number++)
      },1000)
    })
    
    let source2$ = new Observable(res=>{
      let number = 3;
      setTimeout(()=>{
        res.complete()
      },5000)
    })

    combineLatest(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above code first observable will be continue executing but subscriber will not emit any value because it has been completed before emitting atleast one value.

### concat Oprator (Function)
concat is another join creation oprator (function) which takes an array of observables or observables without array and and emits the values after emission of observables in order its provided. For Example if 2 observable are passed to concat then it will emit all the values from the first observable and after first observable's completion it will suscribe to the second observable and it will emit all the values from the second observable.

If empty array is passed to concat then it will complete immediately.

If any observable never completes then it will not move to further observable and it will keep emitting the value from the observable if its infinite observable.

If any observable throws an exception then it will unsubscribe from the all observable and throw and error which will executes the error callback of passed to observer.

```
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        if(number<3){
          res.next(number++)
        }else{
          res.complete()
        }
      },1000)
    })
    
    let source2$ = of('a','b','c')

    concat(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

  // Execution will be as followed 
    Response => 0
    Response => 1
    Response => 2
    Response => a
    Response => b
    Response => c
    Completed
```

In the above example first observable will emit value after 1 second until 2 and it will complete and then only second observable will start executing and it will emit all its values and completes.

```
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        if(number<3){
          res.next(number++)
        }else{
          res.error('Crossed 2')
        }
      },1000)
    })
    
    let source2$ = of('a','b','c')

    concat(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

    // Execution will be as followed.
    Response => 0
    Response => 1
    Response => 2
    Error => Crossed 2
```

### forkJoin Oprator

forkJoin is another join creation oprator (function) which takes an array of observables or dictionary (object) of observables and it will wait to all observables complete and emit all observables last emitted value in the form of array after completion of all the observables passed.

If empty array is passed then it will completes immediately.

If dictionary is passed then it will emit the object withe the same keys binded with its observables last emitted value to it.

If any of the observables not completes it will never emit any value or if any of the observables completes without emitting any value then it will be completed even if some observables have completed after last emitted values and that values will be lost. 

ForkJoin only executes once in case of completion of all observables passed and it gets completed.

If any observables throws an error it will unsuscribe all the observables 
and throws error which calls the error callback of observer.

```
 
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        if(number<3){
          res.next(number++)
        }else{
          res.complete()
        }
      },1000)
    })
    
    let source2$ = of('a','b','c')

  // Execution will be as followed.
    Response => (2) [2, 'c']
    Completed
```
First observable completes after 2 seconds with last emitted value 2 and second observble completes with 'c' so it will print ['2','c'].

```
   let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        if(number<3){
          res.next(number++)
        }
      },1000)
    })
    
    let source2$ = of('a','b','c')

    forkJoin(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above code as the first observable never got completed but forkjoin observer will not get any values due to incompltion of first observable.

```
    let source1$ = new Observable(res=>{
      let number = 0;
      setInterval(()=>{
        res.complete()
      },1000)
    })
    
    let source2$ = of('a','b','c')

    forkJoin(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

    // After 1 second
    Completed
```

In the above example it will get completed after 1 second because one of the observable got completed without emitting first value.

### merge Oprator
merge Oprator is another join creation operator which merges multiple observables together in single observable and emits the value whoever emits in their execution order.

```
    let source1$ = interval(1500)
    
    let source2$ = interval(500)

    merge(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In Above Code source1$ observable starts emitting its value after 1.5 seconds in between which source2$ will complete its 3 value and whichever emits the value it will immediately sends to the observer.

```
let source1$ = interval(1500).pipe(map(value=>{
      if(value===3){
        throw "Reached 3"
      }
      return value;
    }))
    
    let source2$ = interval(500)

    merge(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above code when the first observable throws an error the all observables get unsuscribed and it will execute observers error callback.

### partition oprator
partition is another creation operator which takes single observable as an first argument and predicate function which return boolean value.
 
Partition splits the source observable into 2 observable in the form of array from which first one is observable values which passed the conditions and second one which does not passed the predicate conditions.

Its an similar operator to filter which rather return array of observable passed value observable as well as not passed values observable.


```
const bothValues = partition(of(1,2,3,4,5,6,7,8,9,10),(value)=>value%2===0)

concat(...bothValues).subscribe(res=>console.log(res))
```

In the above code bothValues will hold the array of observable values like `[observable(truthy),observable(false)]` which we combined with concat operator which will emit the values in series.

### race operator
race is another creation opeator which takes multiple observables or array of observables as an argument which only returns the observable which emits the value first as like race. All other observables will be unsubscribed.

If any observable will throw an error without anyone winning the race by emitting its value first then it will be discarded and executes the error callback.

If any observable will throw an error after someone winning the race by emitting its value first then it will not bother the execution of returned observable.

```
let source1$ = interval(1000);
    
    let source2$ = of('a','b','c');

    race(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above example 2nd observable will emit the value first soo it will be returned to observable and first one will be unsubscribed.

```
let source1$ = interval(1000);
    
    let source2$ = of('a','b','c').pipe(map(val=>{
      if(val=='a'){
        throw "reached a"
      }
      return val;
    }));

    race(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

In the above example, one of the observable emits the error before emittion of first value from any of the observable soo no observable will be returned and it will execute the error callback of the observer.


```
    let source1$ = interval(500);
    
    let source2$ = interval(1000).pipe(map(val=>{throw "error occured"}));

    race(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```

In the above example one of the observable emits the error as soon as it emits the value but first observalbe will be returned and executed becuase emittion of first value already completed and afterwards even if any observable emits the error it will not affect the returned observables execution.

### zip operator

Zip is another join creation operator which takes multiple observables or array of observables as an argument which returns the arrays of values with the same execution count.

Means it will combines first emitted values of all observables and returns it to observable and it will be continuously emitted until all the observables emitting same amount of values.

```
    let source1$ = of('a','b','c','d','e','f');
    
    let source2$ = of('1','2','3','4','5','6');

    zip(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })

    // Execution
    ['a','1']
    ['b','2']
```
In the above example it will emit the first, second,so on values together in the array which means values with the same execution count or index will be grouped together in array while returning.

```
  
    let source1$ = interval(1000);
    
    let source2$ = interval(3000);

    zip(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above example one of the observable emitting value before and one after soo it will wait until all values are emitted of same execution count and then only it will return the array of values together.

```
    let source1$ = interval(1000);
    
    let source2$ = interval(3000).pipe(map(res=>{throw "Error"}));

    zip(source1$,source2$).subscribe(res=>{
      console.log("Response =>",res)
    },error=>{
      console.log("Error =>",error)
    },()=>{
      console.log("Completed")
    })
```
In the above example while executing first observable emitted value but another observable emitted error soo it will immediately unsubscribe all the observables and executes the error callback of observer.

### RxJs Schedular
RxJs Schedular is a tool which gives us more control over the observable in the terms of when to start executing the observable and when to deliver the values to the observers.

Most of the rxjs creation functions (operator's) take schedule as an optional parameter by which we can change the behavior of the observable.

**Types of schedulars :-**
1. **queueSchedular :-**

    queue scheduler executes the observable synchronously and next and execution will not go on next line until the observable completes.

2. **asapSchedular :-**

    asap scheduler executes the observable doesnt blocks the event loop but it will add the observable in task queue soo it will be prioritized rather than other asynchronous operations.

3. **asyncSchedular :-**

    async scheduler executes the observable asynchronously as it does by default and observable will be executed asynchronously.

4. **animationSchedular :-**

    When we need browser smooth animations we use the animation schedular.

**List of operator which takes schedular as optional parameter :-**

- bindCallback
- bindNodeCallback
- combineLatest
- concat
- empty
- from
- fromPromise
- interval
- merge
- of
- range
- throw
- timer


### Usage of scheduler's

We can use the schedulars to change the execution of the behaviour of the observables.

```
  console.log("Script start")
  
  let queue$ = of('Queue Schedular',queueScheduler);

  let asap$ = of('Asap Schedular',asapScheduler);

  let async$ = of('Async Schedular',asyncScheduler);
  

  merge(queue$,asap$,async$).subscribe(res=>{
    console.log("Response =>",res)
  },error=>{
    console.log("Error =>",error)
  },()=>{
    console.log("Completed")
  })

  console.log("Script end")

  // Execution order

  // Script start
  // Queue Schedular
  // Script end
  // Asap Schedular
  // Async Schedular

```
In the above code script will start, queue schedular will be logged as it wont allow to go on next line and as it executes synchronously and script will end get logged. As asap schedular will be priortized before async then it will execute asap schedular and async schedular.

**Applications :-**
- When we want to take control over the execution of the observable after subscription.
- When we want to execute observable synchronously line by line.
- When we want to execute any observable asynchronously which is synchronous in behaviour.
- When we want to control the execution of creation operators such as `of`, `from` synchronously or asynchronously.

### defer Operator

defer operator is another creation operator which takes an factory function which returns true or false.

On every new subscription it creates new observables depending on the conditions mentioned in the factory function.

If any error occured while creation of observable error block will be executed of every observers.

```
  let deferSource$ = defer(()=>{
    if(Math.random()>0.5){
      return of(1,2,3,4,5)
    }else{
      return of('a', 'b', 'c', 'd', 'e',)
    }
  })

  deferSource$.subscribe(res=>console.log("Response1 :",res),(err)=>console.log('Error Occured'),()=>console.log('Completed'))
  

  deferSource$.subscribe(res=>console.log("Response2 :",res),(err)=>console.log('Error2 Occured'),()=>console.log('Completed 2'))
```

**Applications :-**
- When we want to create new observable for every subscription.
- When we want to create the observable based on some conditions.



### range Operator
range operator another creation operator which takes `range(start,count,scheduler?)` as an argument from which it will print the all the numbers from start number and how much count we have provided to it.

By default it executes synchronously but we can manipulate its execution by using asap or async schedular.

```
console.log('script starting')
    range(1, 10).subscribe(
      (res) => {
        console.log('res=>', res);
      },
      (error) => console.log('Error =>', error),
      () => console.log('Completed')
    );
    console.log('script ending')
```

In the above code First script will executed and all the range values will be printed and then only script will end as its defualt behaviour is synchronus.


```
console.log('script starting')
    range(1, 10).subscribe(
      (res) => {
        console.log('res=>', res);
      },
      (error) => console.log('Error =>', error),
      () => console.log('Completed')
    );
    console.log('script ending')
```

In the above mentioned code script will start and end then range values will be executed asynchronously.

**Applications :-**

- When we want number of some specific range to pass in some logic through observable.
- When we want single observable emits the values like for loop without using for loop.

### generate Operator
generate operator is another creation used for controlling and manipulating the values of observable before its emission to its subscribers.

generate can be used as for loop with observable as well which takes initial value, condition, itrator, and result selector(Callback function like map) for manipulating the values and the schedular as well.

It takes 
```
let generateOptions:GenerateOptions = {
  initialState:initialValue,
  contition:(x)=>boolean return value,
  iterate: (x) => value modification after condition being true,
  resultSelector:(x)=>value manipulation after the value prepared for emission,
  schedular:schedular for controlling its execution behavior
  }
```
By default `generate(generateOptions)` is synchronous operator which blocks the execution until it gets completes.

```
/* 
for(let i=0;i<5;i++){
  console.log('value'+i)
  
} */
console.log('script starting')
    const generateOptions:GenerateOptions<string,number>={
      initialState:0,
      condition:(x)=>x<5,
      iterate:(x)=>x++,
      resultSelector:(val)=>"Value"+val,
    }
    generate(generateOptions).subscribe(
      (res) => {
        console.log('res=>', res);
      },
      (error) => console.log('Error =>', error),
      () => console.log('Completed')
    );
    console.log('script ending')
```

In the above code we had written the traditional for loop with with the observable which returns the value and we are just printing the value in its observer.

```
/* 
for(let i=0;i<5;i++){
  console.log('value'+i)
  
} */
console.log('script starting')
    const generateOptions:GenerateOptions<string,number>={
      initialState:0,
      condition:(x)=>x<5,
      iterate:(x)=>x+1,
      resultSelector:(val)=>"Value"+val,
      scheduler:asyncScheduler
    }
    generate(generateOptions).subscribe(
      (res) => {
        console.log('res => ', res);
      },
      (error) => console.log('Error =>', error),
      () => console.log('Completed')  
    );
    console.log('script ending')
```
In the above code as we have optional parameter schedule as well we can change its synchronus behaviour to asynchronousl with the help of `asapSchedular` or `asyncSchedular`.


**Applications :-**
- When we wants to replicate for loop like logic with observable.
- When we wants to take control of emittion value in the generation itself.
- When we want to generate some values only for some certain conditions or for sometime as per requirement and then wants to complete it.

### timer oprator
timer Is another creation operator which emits the incremented number values as like interval but it works as javascript `setTimeout(()=>{},time)` as well as `setInterval(()=>{},time)` 

It takes 3 arguements form which `timer(dueTime, interval, schedular)` from which if we only pass the duetime then it will execute the 0 after that due time and default value is 0. If we want to continue the incrementation then we can pass the interval so first it will act as `setTimeout` and after first emittion it will act as `setInterval`.

By default it works asynchronously as like javascript `setTimeout` and `setInterval` but we can control its behavior by passing schedulers as an third argument.

Difference between `interval()` and `timer()` we can control the emission of first value timing in timer which we cant in `interval`. It will start its emittion after the mention time as per its behaviour.

```
console.log('script starting');
    timer(5000).subscribe(
      (res) => console.log('Resp :', res),
      (err) => console.log('Error :', err),
      () => console.log('Completed')
    );
    console.log('script ending');
```
In the above mentioned code it will emit 0 as its default value and we dont have any interval to increment it so and observable will be completed.

```
console.log('script starting');
  timer(5000,1000).subscribe(
    (res) => console.log('Resp :', res),
    (err) => console.log('Error :', err),
    () => console.log('Completed')
  );
  console.log('script ending');
```

In the above example first value 0 will be executed after 5 seconds and it will keep on emitting incremental values after interval of 1000ms.


**Applications :-**
- When you want to use the timeOut with observables.
- When you want to emit first value at different timing than interval timing.

### Count Operator
count is straightforward pipeable mathamatical and aggregation operator which returns single value emission observable which emits the emission count of values as single value when the observable completes.

observable transformed with count will only emit the single value after completion of observable.

If any error occured during emission of observbles and observable doesn't get completed then it will execute observers callback and if the source observable is an infinite observable and never completes then it will never emit any value nor terminate the count.

```
    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.pipe(count()).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
Above Code will emit the values emitted count after completion of `souce$` as we piped the source with count operator which transformed the observable into single value count emission observable.

```
    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.pipe(count((value,index)=>{
      return value%2===0;
    })).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code we had passed the predicate for checking the count of only even numbers so if conditions satisfy then only it will count the emission else it will not count it.


```
    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      tap((value) => {
        if (value == 5) {
          throw 'Value 5 matched';
        }
      })
    );

    source$.pipe(count()).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```

In the above code source will throw an error when value reached 5, as the observable not completed and error occured before completion of observable it will executes only the error callback of the observer.

**Applications :-**
- If you want to get the emitted values count of specific observable to any of subscriber.
- If you want to make count the values on certain conditions and need to get it in some observer.
- If you want to get the emission count after observable gets completed.

### max Operator
max Operator is another pipeable mathamatical and aggregation operator which returns single value emission observable with maximum value after completion of the source observable.

It takes an comparer function as an optional arguement which `returns -1 or 1` by comparing the prev value with current values parameter and it will consider it the maximum value and same goes on till the last value and the max will keep updating and on the completion it will returns the maximum value.

It emits value only after completion of the source observable, hence if source observable throws an error before completion it executes error callback of the observable.

It will never emit the value not will terminate if observable will never completes.

```
   let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    source$.pipe(max()).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code after completion of the source observable it will emits 10 as its maximum value there.


```
    let source$ = of({name:'a',age:12},{name:'c',age:24},{name:'d',age:18})

    source$.pipe(max((prev,cur)=>{
      return prev.age>cur.age ? 1 : -1
    })).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```

In the above code we have array of objects so we need to decide the maximum based on our requirement so we had passed comparator function which returns `1 as true` else `-1 as false` so we will get `{name:'c',age:24}` on the completion of the source observable.

```
    let source$ = of({name:'a',age:12},{name:'c',age:24},{name:'d',age:18}).pipe(tap(value=>{
      if(value.age==24){
        throw "Value 24 matched"
      }
    }))

    source$.pipe(max((prev,cur)=>{
      return prev.age>cur.age ? 1 : -1
    })).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code source observable is thrown error before completion it will executes the error callback of observers.

**Applications :-**
- If we need to find the maximum value from the all emitted values after completion of the observable.
- If we want to mark the value as maximum on certain condition by comprating come property from current and previous value.


### min Operator
min operator is another pipeable mathematical aggregation operator which returns single value emission observale which will emit the observable with minimum value after completion of source observable.

It takes an comparator function as an optional parameter which we can compares the value for deciding the minimum value by returning `1 as true` and `-1 as false`.

If any error occures before completion it will executes the error callback of observers and if it never completes then it will never terminate nor emit any value because observable is not completed.

```
let source$ = of(1,2,3,4,5)

    source$.pipe(min()).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code it will emit 1 as its minimum value after completion of the source observable.

```
 let source$ = of({name:'a',age:12},{name:'c',age:24},{name:'d',age:18})

    source$.pipe(min((prev,cur)=>{
      return cur.age<prev.age ? 1 : -1;
    })).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code it will emit `{name:'a',age:12}` as its minimum value decided by the comprator function after completion of the source observable.

```
let source$ = of({name:'a',age:12},{name:'c',age:24},{name:'d',age:18}).pipe(tap(val=>{
      if(val.age===24){
        throw "Age 24 matched"
      }
    }))

    source$.pipe(min((prev,cur)=>{
      return cur.age<prev.age ? 1 : -1;
    })).subscribe(
      (res) => console.log('Response1 :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```

In the above code it will executes the error callback with error as source observable thrown error before its completion.

**Applications :-**
- If we need to find the minimum value from the all emitted values after completion of the observable.
- If we want to mark the value as minimum on certain condition by comprating come property from current and previous value.

### scan Operator
scan Operator is another pipeable join operator which have ability to remember the previous emitted value and we can update it after every values emittion.

Scan operator maintains the state for emitted values which keep updating by the reducer `accumulator function (which gives you current value as well as previously emitted value)` as per the latest value which is passed as an first argument to the scan operator. We can pass the initial value as well as well as second parameter.

It takes second parameter seed value which is default value to be passed else it will consider first emitted value as seed value.

If the initial value not passed it will consider first emitted value as accumulator.

`scan((acc,cur)=>return statement,defaultValued)` from which accumulator will be the last stored value in state.

```
    source$.pipe(scan((lastEmittedVal,curValue)=>{
      lastEmittedVal===0? console.log("Initial Value :",lastEmittedVal) : console.log("Last Emitted :",lastEmittedVal)

      console.log("Current Value :",curValue)
      return lastEmittedVal+curValue
    },0)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );

```

In the above code it will start with 0 as the default value passed and every time value emits by the source observable its updating the accumator value and we are printing it from the subscriber.

```
  let source$ = of(1,2,3,4,5)

    source$.pipe(scan((lastEmittedVal,curValue)=>{
      lastEmittedVal===0? console.log("Initial Value :",lastEmittedVal) : console.log("Last Emitted :",lastEmittedVal)
      console.log("Current Value :",curValue)
      if(curValue==4) throw "Value reached 5"
      return lastEmittedVal+curValue
    },0)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code it will keep on emitting the value till 3 and executes the error callback after reaching to 4.

**Application :-**
- If you want the previous emitted value of the observable.
- If you want previously emitted value from the observable and update the accumulator value according to your logic.
- If you need to implement fibbonaci numbers logic with observables.

### reduce Operator
reduce is another pipeable Operator same as scan operator which takes accumulator function as an argument and keep updating the accumulator value as per provided logic.

Main difference between scan operator and reduce operator is reduce operator only emits the last accumulator value stored after completion of the observable whereas scan operator emits the value on every values emission from source observable.

It takes second parameter seed value which is default value to be passed else it will consider first emitted value as seed value.

If any error occured before completion of observable it executes the error callback and if the observable never completes then it will never emit the value nor will get terminated.

It transformes the observable into single emission accumulator value operator which emits the value on completion. 

```
    let source$ = of(1,2,3,4,5)

    source$.pipe(reduce((lastEmittedVal,curValue)=>{
      lastEmittedVal===0? console.log("Initial Value :",lastEmittedVal) : console.log("Last Emitted :",lastEmittedVal)
      console.log("Current Value :",curValue)
      return lastEmittedVal+curValue
    },0)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code we it will emit last accumulated value only after completion of the observable.

```
  let source$ = of(1,2,3,4,5)

    source$.pipe(reduce((lastEmittedVal,curValue)=>{
      lastEmittedVal===0? console.log("Initial Value :",lastEmittedVal) : console.log("Last Emitted :",lastEmittedVal)
      console.log("Current Value :",curValue)
      if(curValue==4) throw "Value reached 5"
      return lastEmittedVal+curValue
    },0)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    );
```
In the above code it will directly executes the error callback with error as observable thrown error before its completion.

**Applications :-**
- If you need the last emitted accumulated value for some purpose.
- If you want to keep storing the values after their every emission by doing some operation and keep updating the accumulator value.
- If you want that accumulated value at the completion of observable.

### isEmpty Operator

isEmpty is an pipeable coditional boolean operator which returns single boolean value emission observable which checks for empty observable and observable gets completed without emitting any value.

If the observable will emit any single value still it will emit the value `false` to obserer and gets completed as its checking purpose is done.

We can declare empty observable by using `EMPTY` from the rxjs or `of()` with no value.

If you wish to check the observable is empty or not only after it gets completed then you can use the `count()` which will emit the value after completion and by checking you can declare if observable is empty or not.

The main difference between `count()` and `isEmpty()` is `isEmpty()` immediately returns the value if any value emitted and for count for same purpose we need to wait till the completion of the observable.

```
   let source$ = EMPTY;
    let source2$ = of();

    source$.pipe(isEmpty()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code source$ and source2$ are both empty observable and getting completed without emitting any value so it will emit the value to observer after their completion as true.

```
    let source$ = of(1,2,3,4,5);
    source$.pipe(isEmpty()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

In the above code source is emitting the values so on its first value emission it will emit false to observer and completes teh observable.

**Applications :-**
- When you dont care about the emitted values but you want to check if observable is empty or not in any of subscriber.
- When you wants to completes the observable on its emission of first value.

### findIndex Operator
findIndex is another pipeable conditional boolean operator which returns the single value emission observable which returns the index of first value which matches the condition passed in predicate and completes the observable.

```
    let source$ = of(1,2,3,4,5)
    source$.pipe(findIndex(res=>res>3)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 

    let source2$ = of(1,2,3,4,5)
    source2$.pipe(first(res=>res>3)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

In the above code `findIndex()` returns the observable with index of matched value where `first()` returns the value matched the condition.

```
    let source$ = of(1,2,3,4,5)
    source$.pipe(findIndex(res=>res>200)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 

    let source2$ = of(1,2,3,4,5)
    source2$.pipe(first(res=>res>200)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
The main difference between `findIndex()` and `first()` operator is first throws an error if no value matched the condition where findIndex returns `-1`.


```
 let source$ = of(1,2,3,4,5).pipe(tap(value=>{
      if (value==3) {
        throw "Value 3 reached"
      }
    }))
    source$.pipe(findIndex(val=>val>3)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
If any error occures before meeting the condition it will executes observers err block.

**Application :-**

- When you dont care about the values but you want the index fo first value which matched the critiria.
- When you want to store the index of critiria matched value in some observer.
- When you wants to complets the observable as soon as critiria matches for any value and wants its index.


### find Operator
findOperator is another pipeable boolean conditional operaor which returns single value emissionn observable with the first value matches the critiria mentioned in predicate function and completes the observable.

It takes an arguement a callback function which returns true or false.

`first()` operator also does the same but the main difference between the `first()` and `find()` operator is first `throws an error` if no value matches the critiria where find returns `undefined`.

```
   let source$ = of(1,2,3,4,5)
    source$.pipe(find(val=>val>3)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 

    let source2$ = of(1,2,3,4,5)
    source2$.pipe(first(res=>res>3)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

In the above code both operator returns the observable with value 4 and completes the observable.

```
   let source$ = of(1,2,3,4,5)
    source$.pipe(find(val=>val>200)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 

    let source2$ = of(1,2,3,4,5)
    source2$.pipe(first(res=>res>200)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code source 1 returns the observable with `undefined` whereas source2 throws an error.

```

    let source$ = of(1,2,3,4,5).pipe(tap(res=>{
      if(res===3) throw "Value 3 reached"
    }))
    source$.pipe(find(val=>val>2)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code error occured before matching the predicate critiria it throws and observable with erro and executes observers error callback.

**Application :-**
- When you want to find first value which meets the critiria.
- When you dont want to throw an eror if no value matches the critiria.
- When you want to complete the observable even if only one value matches the critiria and need that value.

### every Operator
every operator is another pipeable conditional boolean operator which returns single value emission observable with boolean value if every value of source observable matches the critiria after completion of the observable.

It returns boolean observable and completes the observable.

```
  let source$ = of(1,2,3,4,5)
  source$.pipe(every(val=>val>0)).subscribe(
    (res) => console.log('Response :', res),
    (err) => console.log('Error Occured :', err),
    () => console.log('Completed')
  ); 
```

In the above code all values are greater than 0 and every value matches the critiria so it returns true.


```
    let source$ = of(1,2,3,4,5,-1)
    .pipe(tap(res=>{
      if(res===3) throw "Value 3 reached"
    }))
    source$.pipe(every(val=>val>0)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code error occured before completion of the source observable so it throws error and executes the error callback of observer.

**Applications :-**
- Where we need to check every value matches the predicate condition and we don't care about the values in response.
- When we want to get the conditions passed status in some observer without manipulating the source observable.

### defaultIfEmpty operator
defaultIfEmpty is another pipeable operator is another boolean conditional operator which returns single value esmission observable with boolean value if the source observable completes without emitting any value.

As compared to isEmtpy operator which returns boolean value on first value emission or completion of empty observable we can use the defaultIfEmpty operator if we want default value want to return.

```
    let source$ = of()
    source$.pipe(defaultIfEmpty('Returned 100 becuase observable is empty')).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

Above code will return observable with default value and completes the observable.

```
    let source$ = of(1,2,3,4,5,-1)
    source$.pipe(defaultIfEmpty('Returned 100 becuase observable is empty')).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

Above will returns the observable as normal as source is not empty and not getting completed without emitting any value.

```

    let source$ = of()
    .pipe(map(res=>{
       throw "Value 3 reached"
    }))
    source$.pipe(defaultIfEmpty('Returned 100 becuase observable is empty')).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

Above code will return default value observable as pipe will not execute because observable is empty.

```
    let source$ = of(new Error('Error'))
    source$.pipe(defaultIfEmpty('Returned 100 becuase observable is empty')).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code it will call response callback because we are returning the error as value not throwing error and `defaultIfEmpty` will not be executed as error also considered as value.

**Applications :-**
- If we want to set default value for any observable if it doesn't emits any values.
- If we want to check and execute any logic if observable is empty then we can emit and check that default value.
- If we want to complete any observable on atleast 1 value emission.

### toArray Operator
toArray is another pipeable utility operator which returns single value emission observable an array of all emitted values from source observable after its completion and completes the observable.

If we want to have all emitted values in the form of array in occurence then we can use `toArray()` operator.

```
    let source$ = of(1,2,3,4,5,-1)

    source$.pipe(toArray()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
It will returns array of values and completes the observable.

```
    let source$ = of(1,2,3,4,5,-1)
    .pipe(map(res=>{
       if(res===3){
        throw "Value 3 reached"
       }
    }))
    source$.pipe(toArray()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code error occured before completion of observable so it will execute error callback with error and doesnt emit any array of done values.

**Applications :-**
- When we want all emitted value together after the completion of observable.
- When we want the values in the form of array together after certain emission.

### subscribeOn Operator
subscribeOn is another pipeable operator allows us to manipulate the behaviour of the subscription to `asynchronus` which is `synchronous` by default.

Behaviour of subscribers or observers totally depends upon the observable if the observable is asynchronous in behaviour like `timer, interval etc` it will executes asynchronously or of the observable will be synchronous in behaviour like `range(), generate()` then it will be synchronus itself.

`subscribeOn()` comes in role where you want the subscription change the behaviour of the subscription for perticular subscription then it changes wihtout manipulating the execution of the source observable.


```
 console.log("Script starting")
    let source$ = of(1)
    .pipe(
      switchMap(res=>{
       return generate(0,(i)=>i<10000,(i)=>i+1)
      }))
    source$.subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```

In the above code script executes synchronusly as the source observable is synchronous in behavior and afte completion of source only then it will execution continues on below code.


```
 console.log("Script starting")
    let source$ = of(1)
    .pipe(
      switchMap(res=>{
       return generate(0,(i)=>i<10000,(i)=>i+1)
      }))
    source$.pipe(subscribeOn(asyncScheduler)).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```

In the above code it was supposed to wait for completion of for loop which was syncronus in behaviour and on the completion of source observable only second console log would be printed.

But as we used `subscribeOn(asyncSchedular)` on the observers it will continue the below execution asynchronusly for source observable will be executed `asynchronusly` which was synchronus in behaviour.

**Application :-**
- When we want to convert the synchronus observer due to syncronus observable to asynchronous.
- When we are having performance issue due to some observable which takes to time to complete or execute and we don't want to let application stuck.


### observeOn operator
observeOn is another pipeable operator does works same as `subscribeOn()` operator which converts behaviour of observable to applied schedular.

The only difference between `observeOn()` and `subscribeOn()` is that observeOn converts the behaviour onwards of it where it applied, if any operator are being used before it then it would not be converted to applied behaviour based on schedular.

where the `subscribeOn()` converts the whole observable as well as the operator applied in the pipe before also.

```
    console.log("Script starting")
    let source$ = of(1,2,3,4,5)
    .pipe(
      tap((value)=>{
        console.log("Logging Values in tap")
      }),
      subscribeOn(asyncScheduler),
      )

    
    source$.subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```
In the above code as we used subscribeOn() which logs the values in tap asynchronusly as it converts whole observable to applied behaviour.

```
    console.log("Script starting")
    let source$ = of(1,2,3,4,5)
    .pipe(
      tap((value)=>{
        console.log("Logging Values in tap")
      }),
      observeOn(asyncScheduler),
      )

    
    source$.subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```
In the above code as we used observeOn() which logs the values syncrhonusly in tap and asynchronusly in subscription as it converts only further things where it applied to applied schedular behaviour.

WHEREAS

```
console.log("Script starting")
    let source$ = of(1,2,3,4,5)
    .pipe(
      observeOn(asyncScheduler),
      tap((value)=>{
        console.log("Logging Values in tap")
      }),
      )

    
    source$.subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```
In the above code as we used observeOn() before tap operator which logging the values and as it converts the further operation to applied schedular behaviour it converts the tap operator logs into asynchronus as well as `subscribeOn()`.

**Applications :-**
- When we want to operate specifically on some operator and not on some specific operators by using `observeOn()` the further will be converted to asynchronous and before will be synchronus or their own behaviour itself.
- When we want to get the values synchronusly as well as asynchronusly.
- When we want to change behaviour of some observer.


### materialize operator
materialize pipeable operator converts value into `Notification Object` which looks like mentioned below.
```
// - Notification { kind: 'N', value: 'A', error: undefined, hasValue: true }
// - Notification { kind: 'E', value: undefined, error: TypeError { message: x.toUpperCase is not a function }, hasValue: false }}
// - Notification { kind: 'C', value: undefined, error: undefined, hasValue: true }
```
materialze operator weather if error occured it calls the error callback or observable completoin it calls complete callback as well as the next method as well with the notification as like mentioned above and completes the observable.

```
 let source$ = of(1,2,3,4,5)    
    source$.pipe(materialize()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed'))
```
In the above code rather than normally emitting values it will emit `Notification` objects instead and it calls the next method for complete as well with `Complete Notification` and then calls the complete callback of observer.

```
    let source$ = of(1,2,3,4,5)
    .pipe(
      map(val=>{
        throw "Error occured"
      })
      )

    
    source$.pipe(materialize()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code observable emit error in which case it will send call next method with `Notification` object and compltes the observable. Doesnt blocks the executoin as like normal unhandelled error.

**Applications :-**
- When we want to get the values in terms of notification.
- When we want get notified completion or error in response callback as well.
- When we want to get error as response and complete the observable rather than stopping execution.

### dematerialize operator
dematerialize is pipeable operator which converts the `Notification object` to normal value as like normal emission.

when we dematerialize on the completion and the error callback its perspective callbacks will be called and no value will be emitted and next callback.

We can't use dematerialize operator if observable not emitting notifications.

```
    let source$ = of(1,2,3,4,5).pipe(materialize(),tap(res=>{
      console.log(res)
    }))

    source$.pipe(dematerialize()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```

In the above code source observable emits the values in the terms of `Notification object` which we can see in tap operator which are converting to normal values in the subscription as we had dematerialized the notifications from normal values.

```
    let source$ = of(1,2,3,4,5)
        .pipe(
      map(val=>{
        throw "Error occured"
      })
      )
    .pipe(materialize(),tap(res=>{
      console.log(res)
    }))


    
    source$.pipe(dematerialize()).subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
```
In the above code source observable emitting an error at the start of the execution for which `Notification object` will be printed in tap where it will execute directly error block of observer as we had dematerialized the error Notification to normal error.

**Applications :-**
- When we want to convert Notifications to values.
- When we dont want to get any value in response on error or completion.
- When we want to interuppt the execution when recieved any error.

### delay Operator
delay is another type of pipeable utility operator which is able to delay the subscription of the observer for the mentioned timeframe or mentioned date.

It takes 2 arguements as first is `timeStamp for date` or the `time in milliseconds` and second optional argument as scheduler.

You might missunderstand that delay will delay the emission of each value from the source observable which delay does not. it emits the values in normal order the only thing will happen will be start of the execution will be delayed and further values will be emitted neutrally.

By defut if we use `delay()` it executes asynchronusly weahter the source observable synchronous or asynchronous.

```
    console.log("Script starting")
    let source$ = of(1,2,3,4,5,queueScheduler)

    
    source$.pipe(delay(2000))
    .subscribe(
      (res) => console.log('Response :', res),
      (err) => console.log('Error Occured :', err),
      () => console.log('Completed')
    ); 
    console.log("Script ended")
```
In the above code the subscription will be delayed for the mentioned time frame.

```
    let source$ = of(1, 2, 3, 4, 5);

    console.log('Script Start');

    source$.pipe(delay(new Date('Mon, 3 April 2023 11:26:00'))).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    console.log('Script End');
  }
```
In the above code the subscription will be delayed for mentioned date and time.

```
    let source$ = of(1, 2, 3, 4, 5)
    
    source$.pipe(concatMap(val=>of(val).pipe(delay(2000)))).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

If we want to delay the value for each value we need to return new observable for every value and we need to apply the delay on that single value observable as like mentioned above.

**Applications :-**
- when you want to delay the subscription for some time.
- when you want to do something at some date and time.
- When you want to delay every value emitted by observable by returning seprate observable for that and delaying that observables.


### combineLatestAll operator

We have seen combine latest operator which is join creation operator which takes observables as an output and emits the latest values of all observables on every value emission from any of the observable.

combineLatestAll operator is another pipeable higher order join operator acts as an higher order flattening operator which doesnt takes any arguemnt as an input.

combineLatestAll operator takes all observables form observable of observables and once the outer observable completes it subscribes to all collected observables and emits the values by combineLatest strategy.

```
    let source$ = of(interval(1000).pipe(take(5)),interval(2000).pipe(take(3)))

    // Will not work becoz it takes multiple observables as an input or array of observables
      combineLatest(source$).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // We can use combineLatestAll() on observable of multiple observables.
    source$.pipe(combineLatestAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // Execution order
    Response => (2) [1, 0]
    Response => (2) [2, 0]
    Response => (2) [3, 0]
    Response => (2) [3, 1]
    Response => (2) [4, 1]
    Response => (2) [4, 2]
    Completed
```

In the above code we have obervables of observables for which we cant use combineLatest so we can resolve the such cases with combineLatestAll as like mentioned above.


```
    let source$ = of(interval(1000),interval(2000).pipe(tap(val=>{
      if(val===3) {
        throw "Value reached 3"
      }
    })))
    console.log('Script Start');
    source$.pipe(combineLatestAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // Execution order
  Response => (2) [1, 0]
  Response => (2) [2, 0]
  Error => Value reached to 3
```
In the above code second observable inside the observable throwing an error after reaching value of 3 in which case it will unsubscribe to all inner observables and calls error callback with error.

**Applications :-**
- When you have one observable containing multiple observable and you want to use `combineLatest()` strategy for it.
- When you want to get all recent values of all inner observables on every emission of values from any of inner observables.
- When you want to check all last value of observables at certain point for achieving something.

### concatAll operator

We have seen concat operator which takes multiple observables or array of observables as arguements and executes and subscribeds the observables in mentioned order one by one only after the completion of previous one.

concatAll is another pipeable higher order join operator which subcribe to all inner observables and emits the values in concat strategy (one by one).

```

    
    let source$ = of(interval(1000).pipe(take(3)),interval(2000)
    .pipe(take(4))
    )
    console.log('Script Start');

    // Will not work due to observable of observables
    concat(source$).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // We can use concatAll for observable of observables
    source$.pipe(concatAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 1
    Response => 1
    Parent Value => 1
    Response => 2
    Parent Value => 2
    Response => 0
    Parent Value => 2
    Response => 1
    Parent Value => 2
    Response => 2
    Parent Value => 3
    Response => 0
    Parent Value => 3
    Response => 1
    Parent Value => 3
    Response => 2
    Completed
    
```
In the above code we have observable of observables on which we cant use `concat()` rather than we can use concatAll operator which subscribes to inner observables with cocat stratey and executes one after one on completion of previous observables.

```
    let source$ = of(interval(1000).pipe(take(3)),interval(2000)
    .pipe(take(4),tap(res=>{
      if(res===2) throw "Value reached 2"
      
    }))
    )
    console.log('Script Start');

    source$.pipe(concatAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 1
    Response => 1
    Parent Value => 1
    Error => Value reached to 2
```
In the above code second observable inside the observable throwing an error after reaching value of 2 in which case it will unsubscribe to all inner observables and calls error callback with error.

**Applications :-**
- When you have one observable containing multiple observable and you want to use `concat()` strategy for it.
- When you want to execute all inner observables in order and on completion of previous inner observables.
- when you want all values from observable even if they are already emitted but you want then in order only.


### exhaustAll operator
exhaustAll is another pipeable higher order join operator which works on observable of observables which skips the emission of an outer observables or its values simultaneously which get emitted before the completion of current inner observable.

Which means if its starts executing on firt observable and its not completed but second observable started executing and emitting the values it will skip that values. and directly jump on only after the completion of current observable.

```
    let one$ = interval(1000).pipe(take(4))

    let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
      }))
    }))

    

    source$.pipe(exhaustAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution Order
    Parent Value => 1
    Response => 0
    Parent Value => 1
    Response => 1
    Parent Value => 1
    Response => 2
    Parent Value => 3
    Response => 0
    Parent Value => 3
    Response => 1
    Parent Value => 3
    Response => 2
    Completed
```
In the above code one$ emitting values on interval of 1 seconds but in the source observable we are emitting 3 values on interval of 0.5 seconds each so value `2` and `4` will be emitted from one$ before completion of `1` and `3` so only 1 and 3 will be taken in consideration and 2 and 4 got emitted in between the completion of inner observable those will be skipped as like exhaustMap.


```

    let one$ = interval(1000).pipe(take(4),filter(val=>val>0))

    let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
        if(val===2){
          throw `Value 2 Reached For ${parValue}`
        }
      }))
    }))

    

    source$.pipe(exhaustAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 1
    Response => 1
    Parent Value => 1
    Error => Value reached to 2
```
In the above code we are getting an error in between the execution so it will print till error occures and if error occures it will unsubscribe the outer observable as well as all inner observables.

**Applications :-**

- When we want to avoid multiple execution for a single observable until its completed in observable emitted from higher order observable.
- When we want start the execution immedietry but don't want to move to next observable until the previous one completed in observable emitted from higher order observable.
- If there is api call on button for which you dont want to send multiple request if previous is not completed then in that case you can use `exhaustAll` on higher order observable.

### switchAll operator
switchAll operator another pipeable higher order join operator which works on observable of observables in which it switches to most recent emitted outer observable and drops the execution of inner observable if source emits another outer observable before completion of inner observable.

Which Means it took first observable from observable of observables and executing returning inner observables for it before completion of inner observable source again emits new observables so it will switched to new outer observable and start returning inner observables for it.

```
    let one$ = interval(1000).pipe(take(4),filter(val=>val>0))

    let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
      }))
    }))

    

    source$.pipe(switchAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 2
    Response => 0
    Parent Value => 3
    Response => 0
    Parent Value => 3
    Response => 1
    Parent Value => 3
    Response => 2
    Completed
```
In the above code first value 0 is emitted for for `0,1,2` of outer observable because outer observable is emitting new value after one second and till then only 1 value returned from inner observable and only `3` which is the last observable from source will be executed with `0,1,2` totally.



```
  let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
        // if(val===2){
        //   throw `Value 2 Reached For ${parValue}`
        // }
      }))
    }))

    

    source$.pipe(switchAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 2
    Response => 0
    Parent Value => 3
    Response => 0
    Parent Value => 3
    Response => 1
    Parent Value => 3
    Error => Value reached to 2
```
In the above code execution will be completed for outer observable till 3 because before values will not reach till 2 due to new value emission from source observable and it got switched to new one before reaching value 2. And when error occures it will calls error callback and unsubscribes inner observables as well as outer observable.

**Applications :-**
- When higher order observable emits observable for which you want to care about the value of last emitted observable and need to cancel the previous execution.
- If higher order observable emits the observables for the clicks of pagination where you need to get only the data of latest page where you want to cancel previous request.
- If higher order observable emits the observable for user inputs for server side search and you want to make sure api should call for latest input value and previous have to be cancelled to make sure we will get the latest search result.


### mergeAll operator
mergeAll is another pipeable higher order join operator which works on observable or observables fomr which it subscribes to all inner observables at a time and executes in the order of their emission.

No value will be skipped or discarded all observable will be execute completly but only the order of emission of values will be the most recent emitted value.

If first inner observable is still not completed and suddenly second observable emits the value it will emit the value of second observable evern in between the completion of first observable and soo on.

```
  let one$ = interval(1000).pipe(take(4),filter(val=>val>0))

    let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
      }))
    }))

    

    source$.pipe(mergeAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution order
    Parent Value => 1
    Response => 0
    Parent Value => 1
    Response => 1
    Parent Value => 2
    Response => 0
    Parent Value => 1
    Response => 2
    Parent Value => 2
    Response => 1
    Parent Value => 2
    Response => 2
    Parent Value => 3
    Response => 0
    Parent Value => 3
    Response => 1
    Parent Value => 3
    Response => 2
    Completed
```
In the above code next value of interval from outer observable is getting emitted before completion of inner observable so it will print `0,1` and emits outer observables `2` value and also emits the remaining value of inner observable for 1 and so on.

```

    let one$ = interval(1000).pipe(take(4),filter(val=>val>0))

    let source$ = one$.pipe(map(parValue=>{
      return interval(500).pipe(take(3),tap(val=>{
        console.log(`Parent Value => ${parValue}`)
        if(val===2){
          throw "Value reached to 2"
        }
      }))
    }))



    source$.pipe(mergeAll()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // Execution order
  Parent Value => 1
  Response => 0
  Parent Value => 1
  Response => 1
  Parent Value => 2
  Response => 0
  Parent Value => 1
  Error => Value reached to 2
```

In the above code when the inner observable value reached for val 1 it stops the execution and calls error callback with error and unsubscribes outer observable as well as inner observables.

**Applications :-**
- When you want to merge the data from multiple observables emitted by the higher order observable and merge into single observable which emits the values as they emitted at single place.
- If higher order observable emits observable on every user event such as mouse click, keyboard event and you want to execute somthing by combining all of that observables came from multiple sources and needed to make sure execution should be done for each emitted value from any source at single place.
- If you want to merge the responses of multiple api requests's emitted from single higher order observable and wants the response in the response order of api's.

### startsWith operator
startsWith operator is another pipeable join operator returns observable to subscribers as an default or first value and then emits the values from source observables.

startsWith operator takes multiple values as arguemnts , seprated like `startsWith(value1,value2,value3)`.

If any error occures at source observable atlest the values provided with startsWith will be emitted to observers and calls the error callback after receiving an error.

It takes scheduler as an second arguement with which you can change its default synchronus behaviour into the required behaviour

```
    let source$ = of(1,2,3,4,5)

    source$.pipe(startWith(0)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code simpl first value as 0 will be sent to subscription and then observable emitted values will be returned.

```
    let source$ = of(1,2,3,4,5)

    source$.pipe(startWith(-5,-4,-3,-2,-1,0)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code simply first negative values with 0 will be sent to subscription and then only observable emitted values will be returned.

```
    let source$ = of(1,2,3,4,5).pipe(map(val=>{
      throw "Error occured Initially"
    }))

    source$.pipe(startWith(-5,-4,-3,-2,-1,0)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```
In the above code all default values will be sent to observer and then only observers error method called with error.

```
 console.log('Script Start');

    let source$ = of(1,2,3,4,5,asyncSchedular)

    source$.pipe(startWith(-5,-4,-3,-2,-1,0)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    console.log('Script End');
```

In the above code source observable is asynchronus but the starts with operator is synchronous so scrpti will start and it will return the values synchronously and script will end and then only observables emitted value would be returned to observer asynchronously.

```
 console.log('Script Start');

    let source$ = of(1,2,3,4,5,asyncSchedular)

    source$.pipe(startWith(-5,-4,-3,-2,-1,0,asyncSchedular)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    console.log('Script End');
```


In the above code source observable is asynchronus as well as we changed the behaviour of startswith operator as well soo script will start and end then all starts with values will sent to observers asynchronusly and observables emitted values will be returned.

**Applications :-**
- When we want to emit and process the default value hardcoded or dynamic from other observables before processing with the first value of source observable.
- When you want to prepare the logic with some default values for upcoming values from source observable.
- When you want to check the values from source observable with some values.


### withLatestFrom Operator
withLatestFrom is another pipeable join operator which combines the latest value from provided observable when the source observable emits value and returns to observers.

If inner observable completed so it will combine the last value with every emitted value by the source observables.

If source observables is an empty observable or returns the error without emitting any value it will call error callback of observers and doesnt returns any value returned from provided observable.

```
    let source$ = interval(2000).pipe(take(4),filter(val=>val>0))

    let two$ = interval(1000).pipe(take(2),filter(val=>val>0)) 

    source$.pipe(withLatestFrom(two$)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code two$ observable start executing first and takes only 2 values and completes so its last emitted value would be one, When the source observable starts executing values in the form of array would be sent in the form of `[sourceValue, lastEmittedValueofProvidedObservable]` soo we will receive `1` with every value emitted by source observable.

```

    let source$ = EMPTY.pipe(delay(4000))

    let two$ = interval(1000).pipe(take(2),filter(val=>val>0)) 

    source$.pipe(withLatestFrom(two$)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code interval starts and ends with latest value of 1 in 2 seconds, where our source observable will complete without any value so it will never returns the inner observable value and get completed because source observable completed.

```
    let source$ = timer(4000).pipe(map(val=>{
      throw "Initial Error"
    }))

    let two$ = interval(1000).pipe(take(2),filter(val=>val>0)) 

    source$.pipe(withLatestFrom(two$)).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```
In the above code interval starts and ends with latest value of 1 in 2 seconds, where our source observable will throw errorso it will never returns the inner observable value and call error callback with error because source observable thrown an error without emitting single value.

**Applications :-**
- We can use the combineLatest for keeping the source observable updated with latest supported data.
- When we get the user input data from the observbable and we want the last updated value of some data source.
- When we want to combine the data form different source of observable like we are taking user input for add to cart item but we need get its details from different observable and its pricing along with details then we can use withLatestFrom Operator.

### groupBy operator
groupBy operator is another pipeable join operator which returns grouped `observable(Observable with matched with provided predicate function)` it means it returns 2 observable from which first without matched value and second with matched values.

As it returns 2 observable we need to flatten the observables as per our requiment with higher order mapping or higher order join operators as like mentioned below.

The difference between partition and groupBy is partition is creation operator which takes observable and predicate as paramter for which we cannot use pipe method and groupBy is pipeable operator which we can use in pipe method.
```

    let source$ = of(1,2,3,4,5).pipe(groupBy(val=>val%2))

    source$.pipe(elementAt(1),concatAll(),toArray()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

```

In the above code we got 2 observbles in which first contains unmatched values and second contains matched values.

to get matched values we had flatten the 1th index observable with `elementAt(1), concatAll()` and combined all emitted values and converte into array with `toArray()`.


```
    let source$ = of(1,2,3,4,5).pipe(tap(val=>{
      throw "No Values Emitted"
    }),groupBy(val=>val%2))

    source$.pipe(elementAt(1),concatAll(),toArray()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code source observable thrown error without emitting any values soo it directly called error callback with error.


**Note :- We can't use spread operator if we have used groupBy operator on observagle, so its better to use partition which returns the observables in reverse order like [matched, nonMatched] but in the form of array from which its easy to derive the value with `concat(...partitionUsedVar)` as we can spread it.**

**Same Imlementation by using partition :-**

```
   let [even$,odd$] = partition(of(1,2,3,4,5),val=>val%2===0)

    concat(even$.pipe(toArray()),odd$.pipe(toArray())).pipe().subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

**Applications :-**
- When you want to group source observable into multiple groups on the terms of certain key and we need to perfom perticular actions for both seprately.
- When we want to group observables emitted by source split on certain key and group then together then we can use groupBy.
- When we want to split observables from soruce observable into falsy and truthy observables as like `partition` which returns array like `[truthy$,falsy$]` where groupBy splits like `observable(falsy$,truthy$)`.

### pairwise Operator
pairwise operator is another pipeable transformation operator which returns 2 consecutive values together in the form of array.

Pairwise start emitting values after emission of second value from the source observbale which means source observable needs to emit atleast 2 values then only pairwise will start sending the values to observers.

If observable only emits one value then observable will get completed directly with no value.

```
let source$ = of(1,2,3,4,5)

    source$.pipe(pairwise()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution
    Response => (2) [1, 2]
    Response => (2) [2, 3]
    Response => (2) [3, 4]
    Response => (2) [4, 5]
    Completed
```

In the above code pariwise will start emitting values after emission of 2 with `[1,2]` and then on every value emission it will emit the current value with the last consecutive value.

```

    let source$ = of(1,2,3,4,5).pipe(tap(value=>{
      if(value===3){
          throw "Error occured"
      }
    }))

    source$.pipe(pairwise()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution
    Response => (2) [1, 2]
    Error => Error occured
```
In the above code source throwing error on the emission of 3 but before that atleast 2 values are emitted so it will emit first consecutive 2 values and then calls the error callback with error.

```

    let source$ = of(1)
    source$.pipe(pairwise()).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution
    Completed
```

In the above code source observble is emittin only 1 value but pairwise needs atleast 2 values for starting its execution so it will get completed immedietly.

**Applications :-**
- When we want to perform some logic with previous and current value.
- When we want to compare previous and current value are not same to identify its uniqueness with help of `filter()` operator.
- When we want to do some operations like differences between previous and current number and send that value to observers form the data stream of numbers.

### Window Concept
Window in the coding terminology means grouping and batching the data from huge data strean into small chunks based on the parameters as mentioned below.

1. Dependency emission 
2. Size of window with provided fixed number of values
3. Based on time frame.
4. Based on start and end scenarios with methods.
5. Based on initial start and ending on mentioned scenario.

We can achieve windowing the data with the help of rxjs transformation operators as like mentioned below.

1. `window(innerObservable) :-` Dependent emission
2. `windowCount(length) :-` Based on Length of window.
3. `windowTime(timeInMs) :-` Based on Time frame.
4. `windowToggle(startScenario,()=>endScenario) :-` Based on starting and ending scenarios.
5. `windowWhen(()=>closingScenario) :-` Started collecting immedietly but based on closing scenarios .
 
### window Operator
window operator is same as like buffer operator which buffers the emitted source values until the inner observable emits and emits all the previous emitted values as array.

Instead of array window operator returns an `observable of observables`.

`window(innerObservable)` window takes an observable as arguement and the value emission order will depend on emission of innerobservable after using window operator.

If outer observable gets completed but inner observable not emitted the value still it will emit the rest values before completion of source observable and then only gets completed.

```
    
    let source$ = interval(1000).pipe(take(9));
    source$.pipe(window(interval(3000).pipe(take(3))),mergeMap(val=>val.pipe(toArray()))).subscribe(  
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution 
    Response => (3) [0, 1, 2]
    Response => (3) [3, 4, 5]
    Response => (3) [6, 7, 8]
    Completed
```
In the above code source observable emiting values on 1 second and window operator have inner observalbe which emits the value on the interval of 3 seconds so when the value get emitted after emission of inner observable we will receive 3-3 values in the form of array together due to `toArray()` operator.

window operator only completes when outer observable startes emitting values, If the inner observable completed but outer observable is still emitting values it wont emit any value to observers but it outer observable wont be completed and keep executing.


```

    source$.pipe(window(interval(3000).pipe(tap(val=>{
      
    }))),mergeMap(val=>val.pipe(toArray()))).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution
    Response => (3) [0, 1, 2]
    Response => (3) [3, 4, 5]
    Error => Reached 2
```
If outer observable throws an error it will call error callback immedietly but if inner observable throws an error after emitting its value then it wont.

If the Error already occured in the inner observable emitting its value then it will call error callback of observer.


**Applications :-**
- When we want to window observables from source observable when provided observable emits the value from the last emission.
- When we want to implement slidingWindow with observables means window creation on latest emitted values form the last truthy parameter for creating and emitting the window.
- When we want to get all the notifications emitted for perticular user but only when the user will be logged in which would be the inner observable.



### windowCount operator
windowCount operator is another pipeable transformation operator which returns observable of observables after meeting the mentioned count for the emitted values from source observables.

It takes an arguement of type number on which it will emit the values after reaching that count by the emitted values of source observables.

If the observable is completed and count doesn't natched for last stored values still it will emit the rest values and then only get completed.

```
    let source$ = interval(1000).pipe(take(13));
    source$.pipe(windowCount(5),mergeMap(val=>val.pipe(toArray()))).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

    // Execution
    Response => (5) [0, 1, 2, 3, 4]
    Response => (5) [5, 6, 7, 8, 9]
    Response => (3) [10, 11, 12]
    Completed
```
In the above code it will emit the 5 values together when source observable emits the 5 th value and it will go on, Afte emission of `10,11,12,` source observable is getting completed but count didnt reached yet still it will emit the last emitted values on the compoletion of source observable and complets the observer.

```
 let source$ = interval(1000).pipe(take(13),tap(val=>{
      if(val===8){
        throw "Value reached to 8"
      }
    }));
    source$.pipe(window(interval(5000)),mergeMap(val=>val.pipe(toArray()))).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );

  // Execution
  Response => (5) [0, 1, 2, 3, 4]
  Error => Value reached to 8
```

In the above code source observable emits the error when value reached to 8 so it will not emit the second set of values and immediately calls the error callback with error.

**Applications :-**
- When we want to create fix sized windows of data for processing their values.
- If we have some method which have limitations for the number of input values at time then we can devide the data into fixed size windows and keep passing that method.
- If we have cards game and we want to provide fixed number of cards to each player grouped together then we can window them with fixed number by `windowCount()`.


### windowTime operator
windowTime is another pipeable transformation operator which takes the value bases on the provided time in milliseconds and returns observable of observables for the buffered observables from source observable.

Its the same as `bufferTime()` operator only difference is bufferTime emits array of values where windowTime emits observable or observables.

It takes 2 arguements `windowTime(timeWindowForCollectingValues,intervalForNextWindow)` fomr which first operator decides the time window to collect data from source observable and second parameter is the interval time before starting new window.

```
    let source$ = interval(1000);
    source$.pipe(windowTime(3000),mergeMap((val,index)=>{
      if(index===5){
        throw "Min 3 Values emitted"
      }else{
        return val.pipe(toArray())
      }
    }
    )).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code we had provided window time of `3000ms` it will buffer and stores the value till the 2 seconds and emit the value and starts new buffer.

**Applications :-**
- When we want to create the windows based on the time and process it for certain time.
- If we have some logic which takes around 5 seconds to process the batch of values so we can provide the batch after that time period with `windowTime()` operator and by providing delay as well.
- If there is infinite observable which emits the observable on millisecond but we want it to emit only in some time in batch in some time interval to save continues ram consumption for processing that values on every milliseconds.



### windowToggle operator
windowToggle operator is another pipeable transformation operator which buffers the value based on opening selector which is the observable and takes the value till the closing selection function emits an observable.

`windowToggle(openingObservable,()=>closingObservable)` observable starts buffering values when the opening observable emits an observable and it will store the values till the closing observable emits the value and that values will be returned to the subscription.

```

    let source$ = interval(1000);
    source$.pipe(windowToggle(interval(3000),()=>interval(3000)),mergeMap((val,index)=>{
      if(index===5){
        throw "Min 3 Values emitted"
      }else{
        return val.pipe(toArray())
      }
    }
    )).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code we had provided opening selector on the interval of 3 seconds and closign selector also on the interval of 3 secons so above code will return the emitted values on every 3 seconds and start new buffer.

**Applications :-**
- When we want to control the starting and closing of window for collecting the values.
- When we want to buffer the data by our custom scenarios and checks.
- If we are calling api for search on keydown event but we cant call api for every stoke of key so we can detect event with help of `fromEvent(ElementRef,'focus')` and `fromEvent(ElementRef,'blur')` and then only take the all values from window concat it and call only one api for that whole word rather than calling serval api's for every alphabet.

### windowWhen operator
windowWhen operator is another pipeable transformation operator which takes only closing selector and emits the values when closing selector emits an observable.

`windowWhen(()=>closingObservable)` it will start buffering values from the initialisation of source observable and emits the stored values as observable of observables when the closing selector emits an observable.

```
    let source$ = interval(1000);
    source$.pipe(windowWhen(()=>interval(3000)),mergeMap((val,index)=>{
      if(index===5){
        throw "Min 3 Values emitted"
      }else{
        return val.pipe(toArray())
      }
    }
    )).subscribe(
      (res) => console.log('Response =>', res),
      (err) => console.log('Error =>', err),
      () => console.log('Completed')
    );
```

In the above code we had provided closing selector on the interval of 3 seconds so it will returns the set of emitted values form source observables on every 3 seconds.

**Applications :-**
- When we want to control the closing of window which started with initial observable emission.
- If we want to get stored data on button click at once and start new window from its last closing.
- Windowing the data on the some time interval or some timeout.

## Differences Between Set of similar RXJS operators

### merge VS mergeAll VS mergeMap

1. **merge :-** 
  
  Operator merges multiple observables into single observable which emits the latest value whenever any of observable emits an value, merge can be used for avoiding multiple subscribers when source observables are different for same kind of data and to take the all values at one place by merging them into single observable.

  ```
      let s1$ = interval(500).pipe(take(3),map(val=>"Source 1 "+val));
      let s2$ = interval(1000).pipe(take(3),map(val=>"Source 2 "+val));
      let s3$ = interval(2000).pipe(take(3),map(val=>"Source 3 "+val))

      merge(s1$, s2$, s3$).subscribe(val=>console.log(val));
  ```

  Here we are getting values identified by observable itself but we need all values at one place within single subscription.

2. **mergeAll :-** 
  
  flattens the higher order observables and merges into singular observable which emits the value from all the observables which can be used as flattner on the observables with same kind of data but in the form of observable of observables.

  ```
      let s1$ = of(interval(500).pipe(take(3),map(val=>"Source 1 "+val)));
      let s2$ = of(interval(1000).pipe(take(3),map(val=>"Source 2 "+val)));
      let s3$ = of(interval(2000).pipe(take(3),map(val=>"Source 3 "+val)))

      
    // Wrong approach for handelling for observable of observables
    merge(s1$, s2$, s3$).subscribe(val=>val.subscribe(val=>console.log(val)));

    // Flatting observable of observables And the right approach
    merge(s1$, s2$, s3$).pipe(mergeAll()).subscribe(val=>console.log(val));
  ```
  
  Here we are having observable which holds the values emitted from `interval()` if we directly subscribe to it observables will be printed not its values so we had flattened the higer order observables to its values directly.

3. **mergeMap :-**

  `mergeMap()` takes the all emitted values from source observable at once and passes to another operator which also returns observable. to avoid subscription inside subscription we use mergeMap operator so inner observable values would be directly sent to subscriber without wrapping with outer observable.

  ```
      const obsOfValWithName = (string,val) => {
        return of(string + " " + val)
      }

      let s1$ = interval(500).pipe(take(3));

      s1$.pipe(mergeMap(val=>obsOfValWithName("Observable=>",val))).subscribe(val=>console.log(val));
  ```

  Here we have method obsOfValWithName which also returns the observable by combining string with value so if we do it in map we will receive observable in subscriber rather than values so we need are mapping val from source observable which is outer observaable to inner observable returned by method and subscribing directly to inner observable values.


### concat VS concatAll VS concatMap

1. **concat :-**

  we use concat to force the execution multiple observables in order of one by one and getting all observables values at single place by converting into single observable which subscribes to observables one by one and executes their values.

  ```
     let s1$ = interval(500).pipe(take(3),map(val=>"Source 1 "+val));
      let s2$ = interval(1000).pipe(take(3),map(val=>"Source 2 "+val));
      let s3$ = interval(2000).pipe(take(3),map(val=>"Source 3 "+val))

      concat(s1$, s2$, s3$).subscribe(val=>console.log(val));
  ```

  Here we have multiple observables which emits the values randomly without any sequence but we had organised their sequence and emitting all observables values one by one at single place.

2. **concatAll :-**

  when we have observable of observables and we need to flatten their values along with sequential execution order then we use concatAll which flattens the values of observable of observables and send values to subscription in provided sequential order.

  ```
      let s1$ = of(interval(500).pipe(take(3),map(val=>"Source 1 "+val)));
      let s2$ = of(interval(1000).pipe(take(3),map(val=>"Source 2 "+val)));
      let s3$ = of(interval(2000).pipe(take(3),map(val=>"Source 3 "+val)))

      concat(s1$, s2$, s3$).pipe(concatAll()).subscribe(val=>console.log(val));
  ```

  Here we have 3 observable of observables holding values from interval but we getting all flattened values at single place sequentially rather than observables.

3. **concatMap :-**

  when we want to map source observable values to some another observable which could take time to finish but we want to finish its execution before considering next value from source observable for further operations.

  ```
     const converToIntervalWith3Values = (number) => {
      return interval(number*1000).pipe(take(3),map(val=>{
        return `Interval For ${number*1000} => ${val}`
      }))
    }
      let s1$ = interval(500).pipe(take(3));

      s1$.pipe(concatMap(val=>converToIntervalWith3Values(val))).subscribe(val=>console.log(val));
  ```

  Here we want to return inteval of `sourceVal * 1000` for its first 3 values which are observables itself, with the help of concatMap it will wait until completion of interval for first value and after its completion only it will start the next interval for 3 values for second value.


  ### mergeMap VS concatMap VS switchMap vs exhaustMap

  Differences between above this can be found in their words itself.

  - **mergeMap :-** Merge Outputs in single source.

  Merge all outputs in single source observables by subscribing all of them at once and emit the values in their execution order.

  Use when you want want all values at single place at most priority.

  ```
     const converToIntervalWith3Values = (number) => {
      return interval(number*1000).pipe(take(3),map(val=>{
        return `Interval For ${number*1000} => ${val}`
      }))
    }
      let s1$ = interval(1000).pipe(take(3));

      s1$.pipe(mergeMap(val=>converToIntervalWith3Values(val))).subscribe(val=>console.log(val));
  ```

  Here we have inner observable which takes some time but we are not waiting for its completion before starting the execution of next value emitted by source observable.


  - **concatMap :-** One after another in single source.

  Waits for the completion of current observable and then subscribes to next observables and so on sequentially.

  Use when you care about the execution order at most priority.

  ```
    const converToIntervalWith3Values = (number) => {
      return interval(number*1000).pipe(take(3),map(val=>{
        return `Interval For ${number*1000} => ${val}`
      }))
    }
      let s1$ = interval(1000).pipe(take(3));

      s1$.pipe(concatMap(val=>converToIntervalWith3Values(val))).subscribe(val=>console.log(val));
  ```

  Here we have inner observable which takes some time but we are waiting for its completion before starting the execution of next value emitted by source observable.


  - **switchMap :-** switch from one to next. 

  Switches to next observable by discarding the currrent execution if next observable emits any value.

  Use when you care about the latest values most at priority than all values.

  ```
      const converToIntervalWith3Values = (number) => {
      return interval(number*1000).pipe(take(3),map(val=>{
        return `Interval For ${number*1000} => ${val}`
      }))
    }
        let s1$ = interval(500).pipe(take(3));

      s1$.pipe(switchMap(val=>converToIntervalWith3Values(val))).subscribe(val=>console.log(val));

  ```

   Here we have inner observable which takes some time but we are switching to next execution even before completion of previous inner observable whole execution when the next value is emitted from source observable.

- **exhaustMap :-**

  Ignores the in between observables which emits while completion of inner observable.


  Use when your priority is getting throughout data form set observables without missing any values.

  ```
      const converToIntervalWith3Values = (number) => {
      return interval(number*1000).pipe(take(3),map(val=>{
        return `Interval For ${number*1000} => ${val}`
      }))
    }
      let s1$ = interval(500).pipe(take(3));

      s1$.pipe(exhaustMap(val=>converToIntervalWith3Values(val))).subscribe(val=>console.log(val));
  ```

  Here while execution of interval with value 1 for 3 seconds interval for 2 starts unconditionally after 2 seconds but first one still not completed so it will drops the execution of interval with 2.


### End of RXJS

we are done with almost all category of rxjs operators, subjects, schedlers, hot and cold observables etc.

Wd had around 110 operators in the rxjs from which how you can identify which one would suit for your problem statement and scenario so that could be derived from the RXKS operator decision tree.

We can choose the right operator form the rxjs operator decision tree and we can use those by prefrerring our this documentation for its thoroughly understanding.

