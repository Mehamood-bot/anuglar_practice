import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
//cstom stuctual directive
export class UnlessDirective {
// when ever there chage in @input set method get executeds
  @Input() set appUnless(condition: boolean) {
    //intail only odd is flase 
    if (!condition) {
      //so render even value
      //creating a new view as name suggetus, passing the templref,in a way creating a ng-template it all details 
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //clear the dom of even values
      //claring the view
      this.vcRef.clear();
    }
  }

  //taking template ref get detils about the temp,ate
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
