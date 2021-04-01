import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  private appConfig: any;

  constructor(private _http: HttpClient) {}

  //load
  loadConfig() {
    // load api
    return this._http
      .get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
      .then((res) => {
        this.appConfig = res;
        console.log('Dynamical environment test');
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
