import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginId: string =" ";
  password: any="";
  constructor(private route:Router,private service:AuthService){

  }
  login(){
   this.service.login(this.loginId, this.password)
  }
}
