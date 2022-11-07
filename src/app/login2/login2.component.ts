import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['../app.component.sass']
})
export class Login2Component implements OnInit {
  public wrong: boolean;
  public user = {email: "", password: ""}
  constructor(private usersService: UsersService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
   
  }


  login(user: any) {
    this.usersService.login(user).subscribe((val)=>{
    if (val === "mot de passe éronné") {
      this.wrong = true
      
    }
    else {
    this.usersService.token = val.toString()
      if (this.usersService.allowCookies === true) {
          this.cookieService.set('token', this.usersService.token);
          this.cookieService.set('login', this.user.email)
          this.cookieService.set('password', this.user.password)
      }
    this.usersService.logged = true 
    this.usersService.user.email = this.user.email
    
  }
  this.usersService.userProfile(this.usersService.user).subscribe((value: any)=> {
    this.usersService.users.prenom = value[0].user_firstname;
    this.usersService.users.nom = value[0].user_lastname;
    this.usersService.users.address = value[0].user_address;
    this.usersService.users.email = value[0].user_email;
    this.usersService.users.zipcode = value[0].user_zipcode;
    console.log(value)
    this.router.navigateByUrl('/');
    })
    })
    
  }
}
