import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';
<<<<<<< HEAD
import { VideoItemComponent } from './video-item/video-item';
=======
import { FlashCardComponent } from './flash-card/flash-card';
>>>>>>> 73c425094a19c2daeb207697ee82ce40c774f79e

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
<<<<<<< HEAD
    VideoItemComponent,
    ],
=======
    FlashCardComponent],
>>>>>>> 73c425094a19c2daeb207697ee82ce40c774f79e
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
<<<<<<< HEAD
    VideoItemComponent,
    ]
=======
    FlashCardComponent]
>>>>>>> 73c425094a19c2daeb207697ee82ce40c774f79e
})
export class ComponentsModule {}
