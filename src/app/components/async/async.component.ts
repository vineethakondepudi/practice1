import { Component } from '@angular/core';
import { Pra1Service } from '../services/pra1.service';
import { CommonModule } from '@angular/common';
import { AsyncService } from '../services/async.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [ CommonModule, MatTableModule ],
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
bindData : any;
asyncData:any;
displayedColumns: string[] = ["id","name","email"];
dataSource = new MatTableDataSource<any>();

  constructor( private service:Pra1Service, private asyncService:AsyncService){

    this.fetchData();
    this.handleChage();
    this.handleAsyncData();
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
  }

   fetchData = async() => {
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
   }
   catch(error){
 console.log("error"+error);
 
   }
  }

  handleChage = async() => {
    this.service.getAsyncData().subscribe((data) =>{
      this.bindData = data;
      // console.log(response);
    })
  }

  handleAsyncData(){
    this.asyncService.handleAsyncData().subscribe((res:any)=>{
     this.dataSource = res;
     console.log(res);
     
    })
  }
}
