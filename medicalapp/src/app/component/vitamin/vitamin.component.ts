import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vitamin, Vitaminproduct } from 'src/app/model/vitamin';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-vitamin',
  templateUrl: './vitamin.component.html',
  styleUrls: ['./vitamin.component.css']
})
export class VitaminComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
 
  vitaminproducts:any=Vitaminproduct; 
  vitaminproduct:Vitamin|undefined;


  ngOnInit(): void {
    debugger
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('vitaminproductId'));
  
    // Find the product that correspond with the id provided in route.
    this.vitaminproduct = Vitaminproduct.find(vitaminproduct => vitaminproduct.id === productIdFromRoute);
  }

  constructor(private route: ActivatedRoute,
    private cartservice:CartService) { }
    itemcount()
    {
      return this.cartservice.itemcount();
    }
    addToCart(bpproducts:any)
    {
      // console.log(this.product);
      this.cartservice.addToCart(bpproducts);
      window.alert("your product has been added to the cart!");
    }

}
