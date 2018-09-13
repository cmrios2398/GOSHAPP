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
<<<<<<< HEAD
    FlashCardComponent,
    SidebarComponent
=======
    FlashCardComponent
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
   ],
	imports: [],
	exports: [AccordionComponent,
    AccordionMoreComponent,
    CardComponent,
    VideoItemComponent,
<<<<<<< HEAD
    FlashCardComponent,
    SidebarComponent
=======
    FlashCardComponent
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
  ]
})
export class ComponentsModule {}
