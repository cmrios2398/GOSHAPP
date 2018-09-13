import { Component, Input } from '@angular/core';

/**
 * Generated class for the SidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {


  @Input('title') title: string;
  @Input('slug') slug: any;
  @Input('template') template: any;



  constructor() {
  }


}
