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
