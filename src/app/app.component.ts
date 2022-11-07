import { Component, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { GamesService } from './games.service';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  private user = {email: '', password: ''}
  
  public itemsNumber: any 
  constructor(private gamesService: GamesService, public cartService: CartService, public usersService: UsersService, public cookieService: CookieService) {
    this.itemsNumber = cartService.itemsNumber
    let question = confirm("acceptez vous les cookies ?")
    if (question === true) {
      this.usersService.allowCookies = true;
      if (this.cookieService.get('login') != '') {
        var token = this.cookieService.get('token')
        this.user.email = this.cookieService.get('login')
        this.user.password = this.cookieService.get('password')
        if (this.cookieService.get('cart') !== '') {
          this.cartService.items = JSON.parse(this.cookieService.get('cart'))
        }
        this.cartService.itemsNumber = this.cartService.items.length
        this.usersService.token = token;
        console.log(this.user)
        this.usersService.login(this.user).subscribe((val) =>{
          this.usersService.logged = true 
          this.usersService.user.email = this.user.email
          this.usersService.userProfile(this.usersService.user).subscribe((value: any)=> {
            this.usersService.users.prenom = value[0].user_firstname;
            this.usersService.users.nom = value[0].user_lastname;
            this.usersService.users.address = value[0].user_address;
            this.usersService.users.email = value[0].user_email;
            this.usersService.users.zipcode = value[0].user_zipcode;
        });
          });
      }
    }
    else {
      this.usersService.allowCookies = false;
    }
   }
  public display: number = 0;
  unlockMenu(el: number) {
    this.display = el
    
  }
  
  

  
}
