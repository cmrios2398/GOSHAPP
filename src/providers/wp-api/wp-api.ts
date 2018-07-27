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

  getICU(){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/icu-new-starters')
  }

 getInfectionControl(){
   return this.http.get('http://uclst.co.uk/wp-json/wp/v2/infection_control')
 }

 getClinicalQualityProjects(){
   return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_quality_projects')
 }

 getClinicalPolicies(){
   return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_policies')
 }

  getSTSpecific(slug){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug + '/?per_page=100')
  }


}
