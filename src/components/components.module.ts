import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent]
})
export class ComponentsModule {}
