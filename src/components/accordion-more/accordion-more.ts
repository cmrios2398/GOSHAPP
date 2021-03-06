import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-more',
  templateUrl: 'accordion-more.html'
})
export class AccordionMoreComponent implements OnInit {

  accordionExpanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  


  constructor(public renderer: Renderer) {
  

  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 300ms, padding 300ms")
  }
  toggleAccordion() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height" , "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding" , "0px 16px");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "3000px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding" , "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
  }

 
}
