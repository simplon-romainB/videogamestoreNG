import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../app.component.sass']
})
export class CartComponent implements OnInit {
  public total: number;
  public quantity = 1
  
  
  

  constructor(public cartService: CartService, public usersService: UsersService, public cookieService: CookieService) {
    this.total = 0;
    this.cartService.token = this.usersService.token
    for (var i = 0; i < (this.cartService.items).length; i++) {
      this.total += (this.cartService.items[i].price)*(this.cartService.items[i].quantity)
      
    }
   
  this.cookieService.set('cart', JSON.stringify(this.cartService.items));
  console.log(this.cookieService.get('cart'))
   }

  ngOnInit(): void {
  }
  
  update() {
    this.total = 0;
    for (var i = 0; i < (this.cartService.items).length; i++) {
      this.total += (this.cartService.items[i].price)*(this.cartService.items[i].quantity)
    }
  }
  cancelItem(item: any) {
    var name = item.designation
    var price = item.price
    var quantity = item.quantity
    var image = item.image
    for (var i = 0; i < this.cartService.items.length; i ++) {
      if ((this.cartService.items[i].designation === name) &&
          (this.cartService.items[i].price === price) &&   
          (this.cartService.items[i].quantity === quantity) &&
          (this.cartService.items[i].image === image) ) {
            this.cartService.items.splice(i,1)
            this.update()
            this.cartService.itemsNumber --
            this.cookieService.set('cart', this.cartService.items.toString())
          }
        }
    
  }
  acheter() {
    var itemsList = []
    for (var i= 0; i < (this.cartService.items).length; i++) {
      var itemArray = [this.cartService.items[i].designation, this.cartService.items[i].price, this.cartService.items[i].quantity, this.cartService.items[i].image, this.usersService.users.email]
      itemsList.push(itemArray)

      
    }
    this.cartService.saveCart(itemsList).subscribe((val)=> {console.log(val)})
    this.cookieService.set('cart', '' );
  }

}
