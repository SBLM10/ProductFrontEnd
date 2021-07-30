
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  loginForm : FormGroup ;
  private jwtoToken=null; 
  constructor(
    private formBuilder : FormBuilder,private authService:AuthenticationServiceService, private router:Router
  ) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      username : ["",Validators.required],
      password : ["",[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]]
    }

    )
  }

  onLogin(userInDataForm) {
    console.log(userInDataForm);
    this.authService.login(userInDataForm)
    .subscribe(response => {
      let jwt = this.fetchTokenFromResponse(response);
      this.authService.saveToken(jwt); 
      this.loadToken(); 
      this.authService.getCurrentUser(userInDataForm.username).subscribe(
        (Response) => {
          localStorage.setItem('idUser',Response['id']);
          this.router.navigateByUrl("/home"); 
        }
      )
    },err=> {
      alert("Email and password does not exist in our system");
    })
  }

  loadToken() {
    this.jwtoToken= localStorage.getItem('token'); 
  }

  private fetchTokenFromResponse(response) {
    let jwtToken:any ; 
    jwtToken = response.body ; 
    return "Bearer " +  jwtToken.token ;
  }





}
