import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';
import { VideoItemComponent } from './video-item/video-item';
import { FlashCardComponent } from './flash-card/flash-card';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    FlashCardComponent],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    FlashCardComponent]
})
export class ComponentsModule {}
