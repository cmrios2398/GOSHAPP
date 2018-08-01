import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';
import { VideoItemComponent } from './video-item/video-item';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    ],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    ]
})
export class ComponentsModule {}
