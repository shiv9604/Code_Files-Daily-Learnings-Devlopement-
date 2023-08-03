import { ElementRef, Renderer2 } from '@angular/core';
import { RedElDirective } from './red-el.directive';

describe('RedElDirective', () => {
  it('should create an instance', () => {
    let el:ElementRef;
    let rr:Renderer2;
    const directive = new RedElDirective(el,rr);
    expect(directive).toBeTruthy();
  });
});
