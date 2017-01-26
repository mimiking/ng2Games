import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BaseService {

  private http: Http;
  constructor(_http: Http) {
    this.http = _http;
  }

  protected doPost(url: string, postData: any, doSuccess: any, doFailure: any) {
    this.doPromise(this.http.post(url, postData), doSuccess, doFailure);
  }

  protected doGet(url: string, doSuccess: any, doFailure: any) {
    this.doPromise(this.http.get(url), doSuccess, doFailure);
  }

  private doPromise(o: Observable<Response>, success: any, failure: any) {
    o.map((res: Response) => res.json())
    .toPromise()
    .catch((error: any) => {
      failure();
      Observable.throw(error.json().error || 'Server error');
    })
    .then(result => {
      success(result);
    });
  }
}
