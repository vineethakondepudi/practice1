import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor( private http:HttpClient) { }

  public handleAsyncData = () => {
    return this.http.get('https://mocki.io/v1/7aea7258-8259-4e39-a9d1-8440c73ad33a');
  }
}
