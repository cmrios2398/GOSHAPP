import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map'
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider {

 

  

  isConnected(): boolean {
    let conntype = this._net.type;
    return conntype && conntype !== 'unknown' && conntype !== 'none';
  }


  constructor(public _net: Network, public http: HttpClient) {
    console.log('Hello WpApiProvider Provider');
  }

  getHome(){
  return this.http.get('http://uclst.co.uk/wp-json/wp/v2/home')
}

  getSafetyToolkit(){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/safety_toolkit').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getICU(){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/icu-new-starters').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

 getInfectionControl(){
   return this.http.get('http://uclst.co.uk/wp-json/wp/v2/infection_control').pipe(
     map(this.extractData),
     catchError(this.handleError)
   );
 }

 getClinicalPolicies(){
  return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_policies').pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
}

 getClinicalQualityProjects(){
   return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_quality_projects').pipe(
     map(this.extractData),
     catchError(this.handleError)
   );
 }



  getSTSpecific(slug){
    return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
