import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';
import { FlashCardComponent } from './flash-card/flash-card';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    FlashCardComponent],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    FlashCardComponent]
})
export class ComponentsModule {}
