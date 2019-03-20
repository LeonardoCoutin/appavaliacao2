import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class CarDetailsProvider {

  constructor(public http: Http) {
    console.log('Hello CarDetailsProvider Provider');
  }
  callService(cars:string):any {
      return this.http.get(`http://api.fipeapi.com.br/v1/carros/?{apikey}${cars}/json/`)
    }

}