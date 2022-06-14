import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SatafoodService {

  constructor(private _Httpclient: HttpClient) { }

  getData(): Observable<any> {
    return this._Httpclient.get('http://satafood.codesroots.com:3000/api/branches//homepage');
  }
}
