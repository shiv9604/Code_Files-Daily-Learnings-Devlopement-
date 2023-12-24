import { Directive,TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[ngLet]'
})
export class NgLetDirective {

  private context: any = {ngLet:null};

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef.createEmbeddedView(templateRef, this.context));
  }
  
  @Input() set ngLet(data: any) {
    this.context.ngLet = data;
  }

}
