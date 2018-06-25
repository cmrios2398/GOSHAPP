import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WpApiProvider Provider');
  }

  getSafetyToolkit(){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/safety_toolkit')
  }

  getVesselHealth(){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/vessel_health')
  }
  
}
