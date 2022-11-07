import { Injectable } from '@angular/core';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:Products[]=[];
  constructor() { }
  addToCart(product:Products){
    this.items.push(product)
  }
  getItems()
  {
return this.items;
  }

itemcount()
{
  return this.items.length;
}

  // clearcart()
  // {
  //   this.items=[];
  //   return this.items;
  // }
}
