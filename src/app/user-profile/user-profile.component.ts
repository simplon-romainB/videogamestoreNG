import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../app.component.sass']
})
export class UserProfileComponent implements OnInit, AfterViewInit  {
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
  public user = {prenom: "", nom: "", address:"", email: "", password: "", confirmPassword: "", zipcode: ""}
  
  

  constructor(private router: Router, public usersService: UsersService) { 
    

    

    
  }
 

  updateProfile(userBody: any) {
    
    this.usersService.updateProfile(userBody).subscribe((val)=> {
      this.router.navigateByUrl('/');
      console.log(JSON.stringify(val))
      
  })
    
  }

  ngAfterViewInit() {
    
  }
  disconnect() {
    this.usersService.logged = false
  }

  ngOnInit(): void {
    this.user.prenom = this.usersService.users.prenom;
    this.user.nom = this.usersService.users.nom;
    this.user.address =this.usersService.users.address;
    this.user.email =this.usersService.users.email;
    this.user.zipcode = this.usersService.users.zipcode;
    
    
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
