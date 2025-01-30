import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent {
  message='';
  users: any[] = [];

  constructor( private http:HttpClient){
  
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      this.users = data;
    })
  }

  ngOnInit(){
    const observable = new Observable<string>((observer)=>{
      observer.next('Hello RxJS')
      observer.complete();
    });

    observable.subscribe((data)=>{
      this.message = data.toUpperCase();
    })
  }

  

}
