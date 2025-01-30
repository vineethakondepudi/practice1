import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice3',
  standalone:true,
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export default class Practice3Component {

  constructor(private router:Router){

  }


  Practice1(){
this.router.navigateByUrl('/pra1');
  }

  Practice2(){
    this.router.navigate(['/pra2']) }
}
