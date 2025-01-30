import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pra1Service {

  constructor(public http:HttpClient) { }

  public getChartData(){
    return this.http.get("https://mocki.io/v1/e90b4c83-4151-4a2f-a87a-49fb01b6dbfd")
  }

  public getAsyncData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
