import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient:HttpClient) {

  }

  public login(user) {
      return this.httpClient.post(environment.host+"/login",user,{observe:'response'}); 
  }

  public saveToken(jwtToken:string) {
    localStorage.setItem('token',jwtToken); 
  }
  public getCurrentUser(username:string) {
    return this.httpClient.post(environment.host+"/users/CurrentUser/" + username,{observe:'response'}); 
  }

}
