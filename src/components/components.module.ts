import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent]
})
export class ComponentsModule {}
