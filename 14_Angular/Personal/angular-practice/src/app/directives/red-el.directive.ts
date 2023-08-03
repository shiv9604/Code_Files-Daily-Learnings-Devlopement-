import { Directive,ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    this.renderer.setStyle(element.nativeElement,'color','red')
  }

}
