
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public itemsNumber = 0;
  public totalPrice = 0;
  public items: Items[] = []
  public token: any

  constructor(private http: HttpClient) { }
saveCart(cart: any) {
  var header = new HttpHeaders(('Authorization:'+ this.token))
  return this.http.post("http://localhost:3000/cart", cart, {'headers': header, withCredentials: true})
}
  
}
