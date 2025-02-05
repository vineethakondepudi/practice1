import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://newamdevmobileapp-atgzb9fbajhfapeg.northcentralus-01.azurewebsites.net/api/client/login"

constructor( private http:HttpClient, private router:Router ){

}


login(loginId:string, password:string){
  const headers = { 'Content-Type': 'application/json' };
return this.http.post<any>(this.apiUrl, {loginId,password}, { headers }).subscribe(response => {
  if(response.statusCode === 200 && response.accessToken){
    localStorage.setItem('authToken',response.accessToken);
    localStorage.setItem('refershToken',response.refreshToken);
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert(response.message);
  }
}, error =>{
  console.error("Error:", error);
  alert("Login failed, please check you credentials")
})
}

logOut(){
   localStorage.removeItem("authToken");
   localStorage.removeItem("refershToken");
   this.router.navigateByUrl("/login");
}

getToken(){
  return localStorage.getItem("authToken")
}

   
   isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
