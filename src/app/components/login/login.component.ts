import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){

  }
  login(){
    localStorage.setItem('user','true');
    this.route.navigateByUrl('/dashboard');
  }
}
