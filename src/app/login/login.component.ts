import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.sass']
})
export class LoginComponent implements OnInit {
  private country = false
  public inputNull = false;
  public eightValidate: boolean =false
  public majValidate: boolean = false
  public minValidate: boolean = false
  public specValidate: boolean = false
  private special = /[^A-z\s\d][\\\^]?/g
  private min = /[a-z]/gm
  private maj = /[A-Z]/gm
  public passConfirmed = false;
  public registerReady = false;
  public user = {prenom: "", nom: "", address:"", email: "", password: "", confirmPassword: "", zipcode: "", country: ""}

  constructor(private router: Router, private users: UsersService) { }
 

  register(userBody: any) {
    console.log('ok')
    this.users.register(userBody).subscribe((val)=>{
      this.router.navigateByUrl('/');
    })
    
  }

  ngOnInit(): void {
    

    
  }

  passValidation() {

    if ((this.user.password).length >= 8) {
      this.eightValidate = true
    }
    else {
      this.eightValidate = false;
    }

    if (this.special.test(this.user.password)) {
      this.specValidate = true;
    }
    else if(!this.special.test(this.user.password)){
      this.specValidate = false;
    }

    if (this.min.test(this.user.password)) {
      this.minValidate = true
    }
    else if(!this.min.test(this.user.password)){
      this.minValidate = false
    }

    if (this.maj.test(this.user.password)) {
      this.majValidate = true
    }
    else if(!this.maj.test(this.user.password)){
      this.majValidate = false
    }

    if((this.passConfirmed)&&(this.majValidate)&&(this.minValidate)&&(this.specValidate)) {
      this.registerReady = true;
    }
    else {
      this.registerReady = false;
    }
}

confirmPassword() {
  if(this.user.password === this.user.confirmPassword) {
    this.passConfirmed = true
  }
  else {
    this.passConfirmed = false
  }
}
  

}
