import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color="red"
  }

}
