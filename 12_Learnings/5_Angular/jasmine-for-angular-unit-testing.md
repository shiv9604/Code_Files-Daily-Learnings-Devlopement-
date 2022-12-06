# Jamine

Jasmine is the library used for unit testing in the angular and we get the inbuit methods and properties which makes our testing easy.

### Callthrough

We can use the callthrough with `spyOn()` or `spyObj()` for mocking some methods.

With the callthrough we actually call that method in our spied method and we get the result.

```
class Calculator{
    multiply(a,b){
        return a * b
    }
}

describe("Callthrough",()=>{
    spyOn(Calculator, "multiply").callthrough();


    it('should call actual multiply method',()=>{
        expect(multiply(2,3)).tohaveBeenCalledWith(Calculator.multiply)
    })
})
```

### CallFake
