import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Throat, Throatproduct } from 'src/app/model/throat';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-throat',
  templateUrl: './throat.component.html',
  styleUrls: ['./throat.component.css']
})
export class ThroatComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
 
  throatproducts:any=Throatproduct;
  throatproduct:Throat|undefined;


  ngOnInit(): void {
    debugger
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('throatproductId'));
  
    // Find the product that correspond with the id provided in route.
    this.throatproduct = Throatproduct.find(throatproduct => throatproduct.id === productIdFromRoute);
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
