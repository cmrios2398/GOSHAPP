import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { AccordionMoreComponent } from './accordion-more/accordion-more';
import { CardComponent } from './card/card';
import { VideoItemComponent } from './video-item/video-item';
import { FlashCardComponent } from './flash-card/flash-card';
import { SidebarComponent } from './sidebar/sidebar';

@NgModule({
	declarations: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    FlashCardComponent,
    SidebarComponent
   ],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
    FlashCardComponent,
    SidebarComponent
  ]
})
export class ComponentsModule {}
