import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, products } from 'src/app/model/products';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-acidpage',
  templateUrl: './acidpage.component.html',
  styleUrls: ['./acidpage.component.css']
})
export class AcidpageComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  // // products:any=products;
  // product: Products | undefined;
  products:any=products;
  product: Products | undefined;
  constructor(private route: ActivatedRoute,
    private cartservice:CartService) { }
    itemcount()
    {
      return this.cartservice.itemcount();
    }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product:any)
  {
    console.log(this.product);
    this.cartservice.addToCart(product);
    window.alert("your product has been added to the cart!");
  }
}
